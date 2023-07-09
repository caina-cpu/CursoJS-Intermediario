//Fazendo por factory functions: 

/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 27) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btnReset')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btnApagar')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btnIgual')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

//Fazendo por constructor functions: 

function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.display.focus();
        this.cliqueBotoes();
        this.pressionaEnter();
        this.pressionaEsc();
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }
    this.pressionaEsc = () => {
        this.display.addEventListener('keydown', e => {
            if(e.keyCode === 27) {
                this.clearDisplay();
            }
        })
    }
    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clearDisplay = () => this.display.value = ''
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)
    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {alert('Conta inválida'); return};

            this.display.value = conta
        } catch(e) {alert('Conta inválida'); return}
    }
    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btnReset')) this.clearDisplay();
            if(el.classList.contains('btnApagar')) this.apagaUm();
            if(el.classList.contains('btnIgual')) this.realizaConta();
            this.display.focus();
        })
    }
}

const calculadora = new Calculadora()
calculadora.inicia()




