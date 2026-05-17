document.addEventListener('DOMContentLoaded', function() { 
    const form = document.getElementById('callback-form'); 
    const statusDiv = document.getElementById('form-status'); 
    
    if (form) { 
        form.addEventListener('submit', function(e) { 
            e.preventDefault(); 
            const name = document.getElementById('name').value.trim(); 
            const phone = document.getElementById('phone').value.trim(); 
            const message = document.getElementById('message').value.trim(); 
            
            if (!name || !phone || !message) { 
                statusDiv.textContent = '❌ Заполните имя, телефон и сообщение!'; 
                statusDiv.style.color = '#ffaaaa'; 
                return; 
            } 
            
            statusDiv.textContent = '✅ Спасибо! Мы свяжемся с вами.'; 
            statusDiv.style.color = '#a5d6a5'; 
            form.reset(); 
            setTimeout(() => statusDiv.textContent = '', 5000); 
        }); 
    }
    const teamMembers = [ 
        { name: "Алексей Воронов", position: "Управляющий партнёр", bio: "Арбитражные споры, 18 лет практики"}, 
        { name: "Лариса Соколова", position: "Руководитель семейной практики", bio: "Семейное право, защита детей"}, 
        { name: "Дмитрий Кравцов", position: "Адвокат по уголовным делам", bio: "Бывший следователь, 12 лет в адвокатуре"}, 
        { name: "Елена Петрова", position: "Корпоративный юрист", bio: "Юрист для вашего бизнеса, договорная работа"} 
    ]; 
    
    const practices = ["Арбитражные споры", 
                       "Банкротство юридических лиц", 
                       "Семейные споры", 
                       "Наследственное право", 
                       "Уголовная защита бизнеса", 
                       "Трудовые конфликты"]; 
    
    const teamContainer = document.getElementById('team-container'); 
    if (teamContainer) { 
        teamMembers.forEach(member => { 
            const card = document.createElement('div'); 
            card.className = 'team-card'; 
            card.innerHTML = `  
                <h3>${member.name}</h3> 
                <div class="position">${member.position}</div> 
                <p>${member.bio}</p> 
            `; 
            card.addEventListener('click', function() {
                alert(` ${member.name}\n ${member.position}\n ${member.bio}`);
            });
            teamContainer.appendChild(card); 
        }); 
    } 
    
    const practicesContainer = document.getElementById('practices-container'); 
    if (practicesContainer) { 
        practices.forEach(practice => { 
            const li = document.createElement('li'); 
            li.textContent = practice; 
            practicesContainer.appendChild(li);
        }); 
    }

});

