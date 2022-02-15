# Scope - Phạm vi

-   Các loại phạm vi
    -   Global - Toàn cầu
        > Bất cứ đâu trong chương trình đều có thể sử dụng biến, hàm được khai báo global
        -   Được tạo ra khi khái báo một biến, hàm không nằm trong bất cứ phạm vi nào khác (nằm bên ngoài)
        -   Có thể truy cập được tất cả mọi nơi từ khi biến được tạo ra
    -   Code block - Khối mã: let, const {}
        > Những biến này chỉ truy cập bên trong khối mã, bên ngoài khối mã không truy cập được
        -   Chỉ có tác dụng với từ khoá let, const
        -   Những biến này ngoài khối không truy cập được
    -   Local scope - Hàm: var, function
        > Khi khai báo ra một biến hoặc hàm nó lại nằm bên trong một hàm khác, thì chỉ có thể sử dụng biến, hàm đó trong hàm cha
        -   Tạo ra phạm vi hàm khi hàm được gọi
        -   Những biến, hàm được khai báo trong phần thân hàm sẽ thuộc phạm vi hàm và không truy cập được ở bên ngoài
-   Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
    > Một hàm gọi nhiều lần sẽ có nhiều phạm vi mới được tạo
-   Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
-   Cách thức một biến được truy cập
    -   Hàm bên trong sẽ truy cập được biến bên ngoài
    -   Bên hoài sẽ không truy cập được cái biến khai báo bên trong (trừ var)
    -   Luôn lấy biến phạm vi gần nhất
    -   Nếu biến được khai báo sau khi sử dụng thì sẽ lỗi(const, let)
-   Khi nào một biến được xoá khỏi bộ nhớ?
    -   Biến toàn cầu?
        > Được xoá khỏi bộ nhớ khi chương trình bị thoát, tắt trang web hoặc F5 lại chương trình
    -   Biến trong code block & trong hàm?
        > Khi hàm, bock thực thi xong thì sẽ được xoá khỏi bộ nhớ
    -   Biến trong hàm được tham chiếu bởi 1 hàm?
        > Biến không được xoá khỏi bộ nhớ
