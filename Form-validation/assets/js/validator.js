/// Đối tượng Validator
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector,
        ).querySelector(options.errorSelector)

        var parentsElement = getParent(inputElement, options.formGroupSelector)

        var errorMessage

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector]

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'checkbox':

                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked'),
                    )
                    break

                default:
                    errorMessage = rules[i](inputElement.value)
            }

            if (errorMessage) break
        }

        if (errorMessage) {
            // Chèn chữ vào class
            errorElement.innerText = errorMessage
            parentsElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            parentsElement.classList.remove('invalid')
        }

        return !errorMessage
    }

    //  Lấy element của form cần validate
    var formElement = document.querySelector(options.form)

    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                // Trường hợp submit với js
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll(
                        '[name]:not([disable])',
                    )

                    var formValues = Array.from(enableInputs).reduce(function (
                        values,
                        input,
                    ) {
                        switch (input.type) {
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break

                            case 'radio':
                                if (!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                }
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                ).value
                                break

                            case 'file':
                                values[input.name] = input.files
                                break

                            default:
                                values[input.name] = input.value
                        }
                        return values
                    },
                    {})

                    options.onSubmit(formValues)
                } //  Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit()
                }
            }
        }

        //  Lặp qua từng rules và xử lý (lắng nghe sự kiện blur, input)
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input element
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            // Lấy ra thẻ input
            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                // Xử lý mỗi khi ng dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector,
                    ).querySelector(options.errorSelector)

                    var parentsElement = getParent(
                        inputElement,
                        options.formGroupSelector,
                    )

                    errorElement.innerText = ''
                    parentsElement.classList.remove('invalid')
                }
            })

            // if (inputElement) {

            // }
        })
    }
}

// định nghĩa các rules
/**
 * Nguyên tắc của các rules
 * 1. Khi có lỗi => trả lại masage lỗi
 * 2. Khi hợp lệ => không trả lại cái gì cả (undefined)
 */
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            // Trim: bỏ dấu cách đầu và cuối dòng
            return value ? undefined : message || 'Vui lòng nhập trường này'
        },
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)
                ? undefined
                : message || 'Trường này phải là email'
        },
    }
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        },
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || 'Giá trị nhập vào không chính xác'
        },
    }
}
