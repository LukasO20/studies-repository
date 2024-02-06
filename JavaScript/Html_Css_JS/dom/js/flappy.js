function createElement(tagName, className){
    const element = document.createElement(tagName)
    element.className = className
    return element
}

function Pipe(reverse = false) {
    this.element = createElement('div', 'pipe')

    const headpipe = createElement('div', 'pipe-head')
    const bodypipe = createElement('div', 'pipe-body')
    this.element.appendChild(reverse ? bodypipe : headpipe)
    this.element.appendChild(reverse ? headpipe : bodypipe)

    this.setHeight = pipeheight => bodypipe.style.height = `${pipeheight}px`
}

function PipeBars(pipe_p_height, space, x) {
    this.element = createElement('div', 'pipe-bars')

    this.pipeup = new Pipe(true)
    this.pipedown = new Pipe(false)

    this.element.appendChild(this.pipeup.element)
    this.element.appendChild(this.pipedown.element)

    this.SortPipes = () => {
        const heightUP = Math.random() * (pipe_p_height, space)
        const heightDOWN = pipe_p_height - space - heightUP
        this.pipeup.setHeight(heightUP)
        this.pipedown.setHeight(heightDOWN)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.SortPipes()
    this.setX(x)
}

function Bars(bars_height, bars_width, bars_window, bars_space, notification) {
    this.pars = [
        new PipeBars(bars_height, bars_window, bars_width),
        new PipeBars(bars_height, bars_window, bars_width + bars_space),
        new PipeBars(bars_height, bars_window, bars_width + bars_space * 2),
        new PipeBars(bars_height, bars_window, bars_width + bars_space * 3),
    ]

    let displacement = 4
    this.animation = () => {
        this.pars.forEach(par => {
            par.setX(par.getX() - displacement)
      
            if (par.getX() < -par.getWidth()) {
                par.setX(par.getX() + bars_space * this.pars.length)
                par.SortPipes()
            }

            const midle = bars_width / 2
            const xmidle = par.getX() + displacement >= midle
                && par.getX() < midle
            if (xmidle) notification()
        })
    }
}

function Bird(gameHeight) {
    let fly = false

    this.element = createElement('img', 'bird')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => fly = true
    window.onkeyup = e => fly = false

    this.animation = () => {
        const newY = this.getY() + (fly ? 8 : -5)
        const maxHeight = gameHeight - this.element.clientHeight
    
        if (newY <= 0) {
            this.setY(0)
        } else if (newY >= maxHeight) {
            this.setY(maxHeight)
        } else {
            this.setY(newY)
        }
    
    }

    this.setY(gameHeight / 2)
}

function Progress () {
    this.element = createElement('span', 'counter')
    this.attPoints = point => {
        this.element.innerHTML = point
    }

    this.attPoints(0)
}

function BarsPosition(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top

    return horizontal && vertical
}

function Collision(bird, bars){
    let collision = false
    bars.pars.forEach(parbars => {
        if (!collision) {
            const pipeup = parbars.pipeup.element
            const pipedown = parbars.pipedown.element
            collision = BarsPosition(bird.element, pipeup)
                || BarsPosition(bird.element, pipedown)
        }
    })
    
    return collision
}

function FlappyBird() {
    let point = 0

    const area = document.querySelector('[wm-flappy]')
    const height = area.clientHeight
    const width = area.clientWidth
    
    const progress = new Progress ()
    const bars = new Bars(height, width, 200, 400,
        () => progress.attPoints(++point))
    const bird = new Bird(height)

    area.appendChild(progress.element)
    area.appendChild(bird.element)
    bars.pars.forEach(par => area.append(par.element))

    this.start = () => {
        const timer = setInterval(() => {
            bars.animation(),
            bird.animation()

            if (Collision(bird, bars)) {
                clearInterval(timer)   
            }
        }, 20)
    }
}

new FlappyBird().start()