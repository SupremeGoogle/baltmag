// Telegram Bot Configuration
const BOT_TOKEN = "8006677315:AAF8nIWmSuQwH0qbvHIi0THplgbVGp91qZY";

// Photo Gallery Data (Discovered via workspace)
const photos = [
    "photo_1_2026-04-02_19-16-02.jpg", "photo_2_2026-04-02_19-16-02.jpg", 
    "photo_3_2026-04-02_19-16-02.jpg", "photo_4_2026-04-02_19-16-02.jpg", 
    "photo_5_2026-04-02_19-16-02.jpg", "photo_6_2026-04-02_19-16-02.jpg", 
    "photo_7_2026-04-02_19-16-02.jpg", "photo_8_2026-04-02_19-16-02.jpg", 
    "photo_9_2026-04-02_19-16-02.jpg", "photo_10_2026-04-02_19-16-02.jpg", 
    "photo_11_2026-04-02_19-16-02.jpg", "photo_12_2026-04-02_19-16-02.jpg", 
    "photo_13_2026-04-02_19-16-02.jpg", "photo_14_2026-04-02_19-16-02.jpg", 
    "photo_15_2026-04-02_19-16-02.jpg", "photo_16_2026-04-02_19-16-02.jpg", 
    "photo_17_2026-04-02_19-16-02.jpg", "photo_18_2026-04-02_19-16-02.jpg", 
    "photo_19_2026-04-02_19-16-02.jpg", "photo_20_2026-04-02_19-16-02.jpg", 
    "photo_21_2026-04-02_19-16-02.jpg", "photo_22_2026-04-02_19-16-02.jpg", 
    "photo_23_2026-04-02_19-16-02.jpg", "photo_24_2026-04-02_19-16-02.jpg", 
    "photo_25_2026-04-02_19-16-02.jpg", "photo_26_2026-04-02_19-16-02.jpg", 
    "photo_27_2026-04-02_19-16-02.jpg", "photo_28_2026-04-02_19-16-02.jpg", 
    "photo_29_2026-04-02_19-16-02.jpg", "photo_30_2026-04-02_19-16-02.jpg", 
    "photo_31_2026-04-02_19-16-02.jpg", "photo_32_2026-04-02_19-16-02.jpg", 
    "photo_33_2026-04-02_19-16-02.jpg", "photo_34_2026-04-02_19-16-02.jpg", 
    "photo_35_2026-04-02_19-16-02.jpg", "photo_36_2026-04-02_19-16-02.jpg", 
    "photo_37_2026-04-02_19-16-02.jpg", "photo_38_2026-04-02_19-16-02.jpg"
];

let itemsShown = 0;
const itemsPerLoad = 8;
const galleryContainer = document.getElementById('photo-gallery');
const loadMoreBtn = document.getElementById('load-more-btn');

function renderGallery(limit) {
    const fragment = document.createDocumentFragment();
    const end = Math.min(itemsShown + limit, photos.length);
    
    for (let i = itemsShown; i < end; i++) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = photos[i];
        img.alt = `БалтМаг Товар ${i + 1}`;
        img.loading = 'lazy'; // crucial for performance
        
        div.appendChild(img);
        fragment.appendChild(div);
    }
    
    galleryContainer.appendChild(fragment);
    itemsShown = end;
    
    if (itemsShown >= photos.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Check if gallery exists, in case we are on another page
    if (galleryContainer) {
        renderGallery(itemsPerLoad);
        loadMoreBtn.addEventListener('click', () => {
            renderGallery(itemsPerLoad);
        });
    }
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Telegram Form Submission
const form = document.getElementById('tg-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const loader = submitBtn.querySelector('.loader');
const statusDiv = document.getElementById('form-status');

async function sendToTelegramAdmins(name, phone, message) {
    try {
        // 1. Get updates to find who typed /admin1
        const updatesResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
        const updatesData = await updatesResponse.json();
        
        const adminChats = new Set();
        
        if (updatesData.ok && updatesData.result) {
            updatesData.result.forEach(update => {
                if (update.message && update.message.text && update.message.text.trim() === '/admin1') {
                    adminChats.add(update.message.chat.id);
                }
            });
        }
        
        if (adminChats.size === 0) {
            console.warn("No admins found matching /admin1. Using fallback logic or proceeding empty.");
            // Returning error so frontend user knows
            return {
                success: false,
                error: "К сожалению, администраторы пока не активировали бота."
            };
        }
        
        // Format the message nicely
        const formattedMessage = `
🛒 <b>Новое сообщение с сайта БалтМаг!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}

📝 <b>Сообщение:</b>
<i>${message}</i>
`;

        // 2. Send message to all found admins
        const promises = Array.from(adminChats).map(chatId => {
            return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: formattedMessage,
                    parse_mode: 'HTML'
                })
            });
        });
        
        const results = await Promise.all(promises);
        
        // Return true if at least one succeeded
        const anySuccess = results.some(res => res.ok);
        
        if (anySuccess) {
            return { success: true };
        } else {
            return { success: false, error: "Ошибка при отправке в Telegram API." };
        }
        
    } catch (err) {
        console.error(err);
        return { success: false, error: "Произошла сетевая ошибка." };
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI state loading
    btnText.style.display = 'none';
    loader.style.display = 'inline-block';
    submitBtn.disabled = true;
    statusDiv.style.display = 'none';
    statusDiv.className = 'alert';
    
    // Get values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Send
    const result = await sendToTelegramAdmins(name, phone, message);
    
    // Restore UI state
    btnText.style.display = 'inline-block';
    loader.style.display = 'none';
    submitBtn.disabled = false;
    
    statusDiv.style.display = 'block';
    
    if (result.success) {
        statusDiv.classList.add('success');
        statusDiv.textContent = 'Спасибо! Ваше сообщение успешно отправлено.';
        form.reset();
    } else {
        statusDiv.classList.add('error');
        statusDiv.textContent = result.error || 'Произошла ошибка при отправке.';
    }
});
