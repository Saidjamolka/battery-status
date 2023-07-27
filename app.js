const battery_full = document.querySelector(".battery-full")
const battery_flashing = document.querySelector(".battery-flashing")
const battery_charging = document.querySelector(".battery-charging")

const text = document.querySelector(".level")

const batteryStatus = document.querySelector(".status")

navigator.getBattery().then((batt)=> {
    updateBattery = () => {
        let level = Math.floor(batt.level * 100)
        text.innerHTML = level + '%'
        
        if (level == 100) {
            batteryStatus.innerHTML = `Battareykangiz To'liq: <i class='bx bxs-battery battery-full'></i>`
        }
        
        else if (level <= 15 &! batt.charging) {
            batteryStatus.innerHTML = `Battareykangizni To'ldiring <i class='bx bxs-plug bx-flashing bx-flip-horizontal battery-flashing'></i>`
        }

        else if (batt.charging) {
            batteryStatus.innerHTML = `Quvvat Olmoqda... <i class='bx bxs-battery-charging bx-flashing bx-flip-horizontal battery-charging'></i>`
        }

        else {
            batteryStatus.innerHTML = ''
        }
    }
    
    updateBattery()
})