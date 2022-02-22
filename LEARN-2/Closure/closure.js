function createCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3

const counter2 = createCounter()

console.log(counter2()) // 1
console.log(counter2()) // 2
console.log(counter2()) // 3

// Phương pháp ghi log

/*
console.log('[Infor] Hàm gửi mail bắt đầu chạy')
console.log('[Error] Xảy ra lỗi tại xx.Message: xx')
*/

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}

// ================= App =====================

// Registor.js

const infoLogger = createLogger('Info')

infoLogger('Gửi mail lỗi lần 1, thử gửi lại..')
infoLogger('Gửi mail thành công cho user xxx')

// ForgotPassword.js

const errorLogger = createLogger('Error')
errorLogger('Info không tồn tại trong db')

// Debug

const debugLogger = createLogger('Debug')
debugLogger('Mật khẩu sai, hãy thử lại')

// =============== Lưu dữ liệu vào local storage ====================

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => localStorage.setItem(key, JSON.stringify(store))

    const storage = {
        get(key) {
            return store[key]
        },

        set(key, value) {
            store[key] = value
            save()
        },

        remove(key) {
            delete store[key]
            save()
        },
    }

    return storage
}

// Profile.js
const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))
profileSetting.set('fullName', 'Thanh Thi')
profileSetting.set('age', 30)
profileSetting.set('address', 'HCM')

// ============== App ===============
function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars)
        },
    }
}

const app = createApp()

app.add('BMW')
app.show()

app.add('Honda')
app.add('Porsche')
app.show()
