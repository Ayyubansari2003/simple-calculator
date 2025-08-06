
        const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.btn');
        let currentInput = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                if (value === 'C') {
                    currentInput = '';
                    display.innerText = '0';
                } else if (value === 'DEL') {
                    currentInput = currentInput.slice(0, -1);
                    display.innerText = currentInput || '0';
                } else if (value === '=') {
                    try {
                        currentInput = eval(currentInput).toString();
                    } catch {
                        currentInput = 'Error';
                    }
                    display.innerText = currentInput;
                } else {
                    currentInput += value;
                    display.innerText = currentInput;
                }
            });
        });