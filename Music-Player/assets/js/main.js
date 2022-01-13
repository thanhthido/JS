/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next/ prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'RYA_PLAYER'
// const userData = localStorage.getItem(PLAYER_STORAGE_KEY) || {}
// var newData
// if (typeof userData === "object") newData = userData
// else if (typeof userData === "string") newData = JSON.parse(userData)

const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

function parseData(data) {
    if (!data) return {}
    if (typeof data === 'object') return data
    if (typeof data === 'string') return JSON.parse(data)

    return {}
}

const app = {
    currentIndex: 0, // lấy bài hát đầu tiên của mảng
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: parseData(localStorage.getItem(PLAYER_STORAGE_KEY) || {}),
    songs: [
        {
            name: 'Thẩm viên ngoại',
            singer: 'A YueYue, Lệ Cách, Tiểu Điền Âm Nhạc Xã',
            path: './assets/music/song1.mp3',
            image: './assets/img/song1.jpg',
        },
        {
            name: 'Phi Điểu và Ve Sầu',
            singer: 'Nhậm Nhiên',
            path: './assets/music/song2.mp3',
            image: './assets/img/song2.jpg',
        },
        {
            name: 'Xuy Mộng Đáo Tây Châu',
            singer: 'Yêu Dương & Hoàng Thi Phù',
            path: './assets/music/song3.mp3',
            image: './assets/img/song3.jpg',
        },
        {
            name: 'Mây và biển',
            singer: 'A Yue Yue',
            path: './assets/music/song4.mp3',
            image: './assets/img/song4.jpg',
        },
        {
            name: 'Đảo không người',
            singer: 'Nhậm Nhiên',
            path: './assets/music/song5.mp3',
            image: './assets/img/song5.jpg',
        },
        {
            name: 'Điều anh muốn không phải là tạm biệt',
            singer: 'Hậu Huyền',
            path: './assets/music/song6.mp3',
            image: './assets/img/song6.jpg',
        },
        {
            name: 'Kiêu ngạo',
            singer: 'EN',
            path: './assets/music/song7.mp3',
            image: './assets/img/song7.jpg',
        },
        {
            name: 'Ngã tư đường',
            singer: 'Triệu Nãi Cát',
            path: './assets/music/song8.mp3',
            image: './assets/img/song8.jpg',
        },
        {
            name: 'Ngu Hề Thán',
            singer: 'Văn Nhân Thính Thư',
            path: './assets/music/song9.mp3',
            image: './assets/img/song9.jpg',
        },
        {
            name: 'Không bằng',
            singer: 'Tần Hải Thanh',
            path: './assets/music/song10.mp3',
            image: './assets/img/song10.jpg',
        },
        {
            name: 'Nổi gió rồi',
            singer: 'Châu Thâm',
            path: './assets/music/song11.mp3',
            image: './assets/img/song11.jpg',
        },
        {
            name: 'Sau này không gặp lại',
            singer: 'Uông Tô Lang & Từ Lương',
            path: './assets/music/song12.mp3',
            image: './assets/img/song12.jpg',
        },
        {
            name: 'Vây giữ',
            singer: 'Vương Tĩnh Văn Không Mập',
            path: './assets/music/song13.mp3',
            image: './assets/img/song13.jpg',
        },
        {
            name: 'Có thể hay không',
            singer: 'Trương Tử Hào',
            path: './assets/music/song14.mp3',
            image: './assets/img/song14.jpg',
        },
        {
            name: 'Minh Nguyệt Thiên Nhai',
            singer: 'Ngũ Âm Jw',
            path: './assets/music/song15.mp3',
            image: './assets/img/song15.jpg',
        },
        {
            name: 'Cô gái ấy nói với tôi',
            singer: 'Ưu',
            path: './assets/music/song16.mp3',
            image: './assets/img/song16.jpg',
        },
        {
            name: 'Thán Vân Hề',
            singer: 'Cúc Tịnh Y',
            path: './assets/music/song17.mp3',
            image: './assets/img/song17.jpg',
        },
        {
            name: 'Nhất lộ sinh hoa',
            singer: 'Ôn Dịch Tâm',
            path: './assets/music/song18.mp3',
            image: './assets/img/song18.jpg',
        },
        {
            name: 'Tầm dữ',
            singer: 'A YueYue',
            path: './assets/music/song19.mp3',
            image: './assets/img/song19.jpg',
        },
        {
            name: 'Gió Lay Nhành Đào',
            singer: 'Tư Nam/ Tịch Âm Xã',
            path: './assets/music/song20.mp3',
            image: './assets/img/song20.jpg',
        },
        {
            name: 'Tình yêu không có được',
            singer: 'Trịnh Diệc Thần',
            path: './assets/music/song21.mp3',
            image: './assets/img/song21.jpg',
        },
        {
            name: 'Chỉ thiếu một bước',
            singer: 'Nhậm Nhiên',
            path: './assets/music/song22.mp3',
            image: './assets/img/song22.jpg',
        },
        {
            name: 'Thời không sai lệch',
            singer: 'Ngải Thần',
            path: './assets/music/song23.mp3',
            image: './assets/img/song23.jpg',
        },
        {
            name: 'Đông miên',
            singer: 'Tư Nam',
            path: './assets/music/song24.mp3',
            image: './assets/img/song24.jpg',
        },
        {
            name: 'Vãn Dạ Vi Vũ Vấn Hải Đường',
            singer: 'Mặc Nhiên / Sở Vãn Ninh',
            path: './assets/music/song25.mp3',
            image: './assets/img/song25.jpg',
        },
        {
            name: 'Một giấc mộng xưa',
            singer: 'A Du Du',
            path: './assets/music/song26.mp3',
            image: './assets/img/song26.jpg',
        },
    ],

    setConfig: function (key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `  
                <div class="song ${
                    index === this.currentIndex ? 'active' : ''
                }" data-index=${index}>
                    <div class="thumb"
                        style="background-image: url('${
                            song.image
                        }'); background-position:center">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
        })
        playlist.innerHTML = htmls.join('')
    },

    // activeSong: function () {
    //     const itemSong = $$('.item-song')
    //     itemSong.forEach((item, index) => {
    //         if (index === this.currentIndex) {
    //             item.classList.add('active')
    //         } else {
    //             item.classList.remove('active')
    //         }
    //     })
    // },

    definePropertis: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            },
        })
    },

    handleEvents: function () {
        const _this = this
        const cdWidth = cd.offsetWidth // lấy kích thước

        // Xử lý cd quay / dừng
        const cdThumbAnimate = cdThumb.animate(
            [{ transform: 'rotate(360deg)' }],
            {
                duration: 10000, // 10 giây
                iterations: Infinity,
            },
        )
        cdThumbAnimate.pause()

        // Xử lý phóng to thu nhỏ cd
        document.onscroll = function () {
            // console.log(window.scrollY) // cuộn dọc
            // console.log(document.documentElement.scrollTop)

            const scrollTop =
                window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100,
                )
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua song
        progress.oninput = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value
            audio.currentTime = seekTime
        }

        // Khi next bài hát
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render() //active song
            _this.scrollToActiveSong()
        }

        // Khi prev bài hát
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render() //active song
            _this.scrollToActiveSong()
        }

        // Xử lý khi click random
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý lặp lại một song
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Xử lý next song khi audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play() // Repeat
            } else {
                nextBtn.click()
            }
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNotActive = e.target.closest('.song:not(.active)')
            const option = e.target.closest('.option')
            if (songNotActive || option) {
                // Xử lý khi click vào song
                if (songNotActive) {
                    _this.currentIndex = Number(songNotActive.dataset.index) // Số nên convert thành chuỗi
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
                // Xử lý khi click vào option
                if (option) {
                }
            }
        }
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start',
            })
        }, 300)
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

        // console.log(heading, cdThumb, audio)
    },

    loadConfig: function () {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat

        // Object.assign(this, this.config)
    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    // playRandomSong: function () {
    //     function randomIndex() {
    //         return Math.floor(Math.random() * app.songs.length)
    //     }
    //     let newIndex = randomIndex()
    //     if (randomCurrent.length === this.songs.length) {
    //         randomCurrent = [newIndex]
    //     } else {
    //         while (randomCurrent.includes(newIndex)) {
    //             newIndex = randomIndex()
    //         }
    //         randomCurrent.push(newIndex)
    //     }
    //     this.currentIndex = newIndex
    //     this.loadCurrentSong()
    // },

    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function () {
        // gán cấu hình từ config vào ứng dụng
        this.loadConfig()

        // Định nghĩa các thuộc tính cho obj
        this.definePropertis()

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()

        // Hiển thị trạng thái ban đầu của button repeat và random
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
    },
}

app.start()
