       (function() {
            let timeLeft = 300; // 5 минут в секундах
            let timerInterval;
            
            const timerElement = document.getElementById('countdownTimer');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            const colonElement = document.getElementById('colon');
            const labelElement = document.getElementById('timerLabel');
            const messageElement = document.getElementById('timerMessage');
            
            function updateDisplay() {
                const mins = Math.floor(timeLeft / 60);
                const secs = timeLeft % 60;
                
                minutesElement.textContent = String(mins).padStart(2, '0');
                secondsElement.textContent = String(secs).padStart(2, '0');
            }
            
            function countdown() {
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerExpired();
                    return;
                }
                
                timeLeft--;
                updateDisplay();
            }
            
            function timerExpired() {
                timerElement.classList.add('timer-expired');
                labelElement.textContent = 'Время истекло';
                colonElement.style.display = 'none';
                minutesElement.style.display = 'none';
                secondsElement.style.display = 'none';
                
                messageElement.innerHTML = '<button class="timer-reset-btn" onclick="resetTimer()">Начать заново</button>';
            }
            
            window.resetTimer = function() {
                timeLeft = 300;
                timerElement.classList.remove('timer-expired');
                labelElement.textContent = 'Акция';
                colonElement.style.display = '';
                minutesElement.style.display = '';
                secondsElement.style.display = '';
                messageElement.innerHTML = 'Успейте купить по выгодной цене! 🔥';
                
                updateDisplay();
                startTimer();
            }
            
            function startTimer() {
                clearInterval(timerInterval);
                timerInterval = setInterval(countdown, 1000);
            }
            
            // Запуск таймера
            updateDisplay();
            startTimer();
        })();