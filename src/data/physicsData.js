export const physicsData = [
  {
    "id": "chuong-1",
    "title": "Chương I: Dao động cơ học",
    "lessons": [
      {
        "id": "bai-1",
        "title": "Bài 1: Dao động điều hoà",
        "theory": "### Dao động cơ\n \n\n> **Lưu ý:** Dao động cơ là chuyển động qua lại quanh vị trí cân bằng\n\n> **Lưu ý:** Vị trí cân bằng thường là vị trí mà hợp lực tác dụng lên vật bằng 0: $F_{hl}=0$.\n\n![Hình ảnh](/images/Hinh/chimruoi.png)\n\n### Dao động tuần hoàn\n\n> **Lưu ý:** Dao động tuần hoàn là dao động mà trạng thái chuyển động của vật được lặp lại như cũ sau những khoảng thời gian bằng nhau xác định (gọi là chu kì)\n\n### Dao động tự do\n\n> **Lưu ý:** \n\n> -  *Dao động tự do* là dao động mà chu kì (tần số) chỉ phụ thuộc vào các đặc tính của hệ mà không phụ thuộc vào các yếu tố bên ngoài.\n> -  Dao động tự do xảy ra chỉ dưới tác dụng của nội lực.\n> \n\n### Dao động điều hòa\n\n> **Lưu ý:** Dao động điều hòa là dao động trong đó li độ của vật là một hàm cos (hoặc sin) của thời gian\n\n### Phương trình dao động điều hòa\n\\centerline{\n\n__TIKZ_START__/images/tikz/tikz_bai-1_1.svg|\\begin{tikzpicture}[draw=Mapcolor,very thick,>=stealth']\n\\foreach \\x in {2,5}\n{\\draw [dashed] (\\x,0)--++(-90:1.4); }\n\\draw (0,0)node[above]{$-A$}circle (1.5pt)--(10,0)node[above]{$A$}circle (1.5pt);\n\\draw (5,0)node[above]{ O}circle (1.5pt);\n\\draw[ball color=Mapcolor] (2,0) circle (.3);\n\\foreach \\x in {0,10}\n{\\draw [dashed] (\\x,0)--++(-90:1.8); }\n\\draw[<->] (0,-1.6)--node[midway,fill=white]{Chiều dài quỹ đạo L}++(0:10);\n\\draw[<->] (5,-1)--node[midway,fill=white]{Biên độ A}++(0:5);\n\\draw[<->] (2,-1)--node[midway,fill=white]{li độ x}++(0:3);\n\\draw[->,dashed] (2,0.5)--++(180:2)--++(90:0.3)--++(0:10)--++(90:0.3)--++(180:8);\n\\draw[decorate, decoration={brace, amplitude=5pt}] (10.2,1.3)--node[midway,right=3pt]{Chu kì T}++(-90:1);\n\\end{tikzpicture}__TIKZ_END__\n\n}\n\\centerline{\\bth{$\\boxed{x=A\\cos(\\omega t+\\varphi)}$}}\nTrong đó:\n\n-  $x$ là li độ dao động, là khoảng cách từ gốc tọa độ (VTCB) đến vị trí của vật tại thời điểm $t$ đang xét: $-A \\leq x \\leq A$.\n-  $A$ là biên độ dao động (luôn dương).\n-  $\\omega$ là tần số góc (luôn dương).\n-  $\\omega t+\\varphi$ là pha của dao động tại thời điểm $t$.\n-  $\\varphi$ là pha ban đầu của dao động.\n\n> **Lưu ý:** *Dao động điều hòa là trường hợp đơn giản nhất của dao động tuần hoàn*.\n\n### Chu kì, tần số của dao động\n\n-  **Chu kì T** của dao động điều hòa \n\n-  là khoảng thời gian để vật thực hiện một dao động toàn phần. \n-  là khoảng thời gian *ngắn nhất* để vật quay trở lại vị trí cũ, theo *hướng cũ*.\n\n-  **Tần số f** của dao động điều hòa là số dao động toàn phần thực hiện được trong một giây. \n\\centerline{\\bth{$\\boxed{T=\\dfrac{1}{f}=\\dfrac{2\\pi}{\\omega}=\\dfrac{\\Delta t}{N}}$\\quad (s)\n}}\nVới $N$ là số dao động toàn phần vật thực hiện được trong thời gian $\\Delta t$.",
        "exercises": []
      },
      {
        "id": "bai-2",
        "title": "Bài 2: Vận tốc và gia tốc trong dao động điều hoà",
        "theory": "### Vận tốc của vật dao động điều hòa\n\\centerline{\\bth{$\\boxed{v=-\\omega A\\sin(\\omega t+\\varphi)=\\omega A\\cos\\pbrace{\\omega t+\\varphi+\\dfrac{\\pi}{2}}\n}$}}\n\n-  Vận tốc cực đại: \\ \\ $v_{\\max}=A\\omega$\\ \\ \\ khi vật qua vị trí $x=0$ (vị trí cân bằng) theo chiều dương.\n-  Vận tốc cực tiểu:\\ \\  $v_{\\min}=-A\\omega$\\ khi vật qua vị trí $x=0$ (vị trí cân bằng) theo chiều âm.\n-  Tốc độ cực đại: \\ \\ \\ $\\left|v_{\\max}\\right|=\\omega A$\\ \\ khi vật qua vị trí $x=0$ (vị trí cân bằng).\n-  Tốc độ cực tiểu: \\ \\ $\\left|v_{\\min}\\right|=0\\ $ $\\ \\ $ khi vật qua vị trí $x=\\pm A$ (vị trí biên).\n\n> **Lưu ý:** \n\n> -  Vectơ vận tốc $\\vec{v}$ cùng hướng với chuyển động. \n> -  Từ vị trí cân bằng ra biên vật chuyển động chậm dần (tốc độ giảm). \n> -  Từ biên về vị trí cân bằng vật chuyển động nhanh dần (tốc độ tăng).\n> \n\n### Gia tốc của vật dao động điều hòa\n\\centerline{\\bth{$\\boxed{a=-\\omega^2A\\cos(\\omega t+\\varphi)=\\omega^2A\\cos(\\omega t+\\varphi+\\pi)=-\\omega^2x\n}$}}\n\n-  Gia tốc cực đại:$\\  \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ $ $a_{\\max}=A\\omega^2$ $\\ \\ $\\ \\  tại vị trí $x=-A$ (vị trí biên âm).\n-  Gia tốc cực tiểu:$\\  \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ $ $a_{\\min}=-A\\omega^2$ $\\ $ tại vị trí $x=A$ (vị trí biên dương).\n-  Độ lớn gia tốc cực đại:$\\ $ $\\left|a_{\\max}\\right|=\\omega^2A$ tại vị trí $x=\\pm A$ (vị trí biên).\n-  Độ lớn gia tốc cực tiểu: $\\left|a_{\\min}\\right|=0$ $\\ \\ \\ \\ \\ \\ $ tại vị trí $x=0$ (vị trí cân bằng).\n\n> **Lưu ý:** \n\n> -  Vectơ gia tốc $\\vec{a}$ luôn hướng về vị trí cân bằng.\n> -  Độ lớn gia tốc tỉ lệ với độ lớn li độ của vật.\n>",
        "exercises": []
      },
      {
        "id": "bai-3",
        "title": "Bài 3: Phương pháp đường tròn trong dao động điều hoà",
        "theory": "> **Lưu ý:** Một điểm dao động điều hòa \\bth{x=A\\cos(\\omega t+\\varphi)} trên một đoạn thẳng có thể coi là hình chiếu của một điểm M chuyển động tròn đều lên một trục nằm trong mặt phẳng quỹ đạo và đi qua tâm quỹ đạo.\n\n### Quy ước\n\n-  Tốc độ quay của chất điểm trên đường tròn là $\\omega\\ (rad/s)$.\n-  Chiều quay là chiều ngược chiều kim đồng hồ.\n-  Khi M ở nửa trên đường tròn thì vật đang đi theo chiều âm.\n-  Khi M ở nửa dưới đường tròn thì vật đang đi theo chiều âm.\n-  Góc mà bán kính OM nối với vật chuyển động quét được trong khoảng thời gian $\\Delta t$ trong quá trình chuyển động tròn đều bằng: $\\Delta \\varphi=\\omega.\\Delta t$\n\n__TIKZ_START__/images/tikz/tikz_bai-3_1.svg|\\begin{tikzpicture}[draw=Mapcolor, very thick,]\n\n\\path\n\n(-1.5,2)coordinate(M)\n\n(2.5,0)coordinate(A)\n\n(-2.5,0)coordinate(-A);\n\n\\coordinate (o) at (0,0);\n\n\\draw[->] (-2.8,0)--(3,0) node (xline)[right] {\\normalsize{x}};\n\n\\coordinate (a) at (-3.7,-3.5); \\draw[dashed] (a)--(3,-3.5)node(zline){};\n\n\\draw (o) circle (2.5);\n\n\\foreach \\x in {45} {\n\n\\draw (o) --node[midway,above]{{}} (\\x:2.5);\n\n\\filldraw[black] (\\x:2.5) circle(1.5pt);\n\n\\draw[densely dashed] (\\x:2.5) -- (\\x:2.5 |- xline) ;\n\n}\n\n\\foreach \\y in {315} {\n\n\\draw[densely dashed] (\\y:2.5) -- (\\y:2.5 |- xline);\n\n\\draw[densely dashed] (\\y:2.5) -- (\\y:2.5 |- zline) coordinate (m);\n\n\\draw[snake=coil,segment length=5pt,segment amplitude=5.5pt,line before snake=5pt,line after snake=15pt] (a) -- (m);\n\n\\shade[ball color=gray] (m) circle (1.4ex);\n\n\\node[white] at (m){\\small{m}};\n\n}\n\n\\draw[->] (o)++(0:0.7) arc (0:45:0.7);\n\n\\draw[->,thick] (o)++(45:0.566) arc (56.0442:116.6556:0.7);\n\\draw[->] (o)++(60:2.6434) arc (59.3435:82.9694:2.7);\n\n\\node[right] at (78:2.8358) {\\normalsize{$\\omega$}};\n\\node[right] at (22.5:0.7){\\normalsize{$\\varphi$}};\n\\draw[ultra thick] (-3.7,-3.8)--(-3.7,-3.2);\n\\draw (0,0) -- (-1.5,2);\n\\foreach \\x/\\g in {A/320,-A/145,o/90}\n\\draw[fill=white](\\x) circle(0.05)+(\\g:0.3);\n\\foreach \\x/\\g in {M/90}\n\\draw[fill=Mapcolor](\\x) circle(0.05)+(\\g:0.3)node{$\\x$};\n\\node at (-2.875,-0.25) {$-A$};\n\\node at (2.75,-0.25) {$A$};\n\\node at (2,2) {$M_0$};\n\\node at (0,0.75) {$\\omega t$};\n\\end{tikzpicture}__TIKZ_END__\n\n### Cách biểu diễn dao động điều hòa trên đường tròn\n\n-  Vẽ đường tròn tâm O bán kính A.\n-  Điểm $M_0$ thể hiện trạng thái của điểm dao động của vật ở thời điểm ban đầu $t=0$. Trên đường tròn xác định điểm $M_0$ hợp với trục Ox một góc $\\varphi$.\n-  Pha ban đầu: $-\\pi<\\varphi\\leq \\pi$.\n\n-  Khi $M_0$ ở nửa trên đường tròn $\\varphi>0$.\n-  Khi $M_0$ ở nửa dưới đường tròn $\\varphi<0$.\n\n-  Điểm $M$ thể hiện trạng thái của điểm dao động của vật ở thời điểm t. Trên đường tròn xác định điểm M hợp với trục Ox một góc $\\omega t+\\varphi$.\n\n### Pha ban đầu ở các vị trí đặc biệt\n\n__TIKZ_START__/images/tikz/tikz_bai-3_2.svg|\\begin{tikzpicture}[scale=1,draw=Mapcolor, very thick,>=stealth']\\tkzDefPoints{0/0/o, 6/0/a,-6/0/b, 0/6/c, 0/-6/d, 7/0/x',-7/0/x, 0/7/y, 0/-7/y',2/-8/o', -8/-8/o''}\n\\definecolor{maum}{RGB}{13,174,244}\n\\definecolor{mauh}{RGB}{253,185,6}\n\\definecolor{maub}{RGB}{103,208,1}\n\\tkzDrawCircle[line width=2pt,radius,color=Mapcolor](o,a)\n\\tkzDefShiftPoint[o](60:6){1}\n\\tkzDefShiftPoint[o](45:6){2}\n\\tkzDefShiftPoint[o](30:6){3}\n\\tkzDefShiftPoint[o](-30:6){4}\n\\tkzDefShiftPoint[o](-45:6){5}\n\\tkzDefShiftPoint[o](-60:6){6}\n\\tkzDefShiftPoint[o](-120:6){7}\n\\tkzDefShiftPoint[o](-135:6){8}\n\\tkzDefShiftPoint[o](-150:6){9}\n\\tkzDefShiftPoint[o](150:6){10}\n\\tkzDefShiftPoint[o](135:6){11}\n\\tkzDefShiftPoint[o](120:6){12}\n\\tkzDrawSegments[line width=2pt,->,Mapcolor](x,x')\n\\tkzLabelPoint[above right](1){${\\dfrac{\\pi}{3}}$}\n\\tkzLabelPoint[above right](2){${\\dfrac{\\pi}{4}}$}\n\\tkzLabelPoint[above right](3){$ {\\dfrac{\\pi}{6}}$}\n\\tkzLabelPoint[below right](4){$ {-\\dfrac{\\pi}{6}}$}\n\\tkzLabelPoint[below right](5){$ {-\\dfrac{\\pi}{4}}$}\n\\tkzLabelPoint[below right](6){$ {-\\dfrac{\\pi}{3}}$}\n\\tkzLabelPoint[below left](7){$ {-\\dfrac{2\\pi}{3}}$}\n\\tkzLabelPoint[below left](8){$ {-\\dfrac{3\\pi}{4}}$}\\tkzLabelPoint[below left](9){$ {-\\dfrac{5\\pi}{6}}$}\\tkzLabelPoint[above left](10){$ {\\dfrac{5\\pi}{6}}$}\\tkzLabelPoint[above left](11){$ {\\dfrac{3\\pi}{4}}$}\\tkzLabelPoint[above left](12){$ {\\dfrac{2\\pi}{3}}$}\n\\tkzLabelPoint[above right](a){$ {0}$}\n\\tkzLabelPoint[above left](b){$ {\\pi}$}\n\\tkzLabelPoint[below right,yshift=-5pt](a){$ {A}$}\n\\tkzLabelPoint[below left,yshift=-5pt](b){$ {-A}$}\n\\tkzLabelPoint[above](c){$ {\\dfrac{\\pi}{2}}$}\n\\tkzLabelPoint[below](d){$ {-\\dfrac{\\pi}{2}}$}\n\\tkzDefPointBy[projection=onto x--x'](1)\n\\tkzGetPoint{h1}\\tkzDefPointBy[projection=onto x--x'](2) \n\\tkzGetPoint{h2}\\tkzDefPointBy[projection=onto x--x'](3) \n\\tkzGetPoint{h3}\\tkzDefPointBy[projection=onto x--x'](10)\n\\tkzGetPoint{h10}\\tkzDefPointBy[projection=onto x--x'](11)\n\\tkzGetPoint{h11}\\tkzDefPointBy[projection=onto x--x'](12)\n\\tkzGetPoint{h12}\\tkzDefPointBy[projection=onto y--y'](1) \n\\tkzGetPoint{h1'}\\tkzDefPointBy[projection=onto y--y'](2) \n\\tkzGetPoint{h2'}\\tkzDefPointBy[projection=onto y--y'](3) \n\\tkzGetPoint{h3'}\\tkzDefPointBy[projection=onto y--y'](4) \n\\tkzGetPoint{h10'}\\tkzDefPointBy[projection=onto y--y'](5)\n\\tkzGetPoint{h11'}\\tkzDefPointBy[projection=onto y--y'](6)\n\\tkzGetPoint{h12'}\\tkzDrawSegments[green!50!black](3,4  9,10  2,5  8,11  1,6  7,12  1,7 2,8 3,9 4,10 5,11 6,12)\n\\draw[Mapcolor!50] (c)--(d);\n\\tkzDrawPoints[size=1.5,fill=white](1,2,3,4,5,6,7,8,9,10,11,12,h1,h2,h3,h10,h11,h12,o,a,b,c,d)\n\\tkzLabelPoint[below,fill=white](o){$\\scriptsize {O}$}\n\\draw[white](h1)++(-90:0.2)--++(-90:0.8);\n\\draw[white](h2)++(-90:0.2)--++(-90:0.8);\n\\draw[white](h3)++(-90:0.2)--++(-90:0.8);\n\\draw[white](h10)++(-90:0.2)--++(-90:0.8);\n\\draw[white](h11)++(-90:0.2)--++(-90:0.8);\n\\draw[white](h12)++(-90:0.2)--++(-90:0.8);\n\\tkzLabelPoint[below=4.5pt](h1){$\\scriptsize {\\dfrac{A}{2}}$}\n\\tkzLabelPoint[below=3pt](h2){$\\scriptsize {\\dfrac{\\sqrt{2}A}{2}}$}\n\\tkzLabelPoint[below=3pt](h3){$\\scriptsize {\\dfrac{\\sqrt{3}A}{2}}$}\n\\tkzLabelPoint[below=4.5pt](h12){$\\scriptsize {-\\dfrac{A}{2}}$}\n\\tkzLabelPoint[below=3pt](h11){$\\scriptsize {-\\dfrac{\\sqrt{2}A}{2}}$}\n\\tkzLabelPoint[below=3pt](h10){$\\scriptsize {-\\dfrac{\\sqrt{3}A}{2}}$}\n\\end{tikzpicture}__TIKZ_END__",
        "exercises": []
      },
      {
        "id": "bai-4",
        "title": "Bài 4: Con lắc lò xo",
        "theory": "### Cấu tạo và dao động của con lắc lò xo\n\n-  Con lắc lò xo gồm vật nặng khối lượng m được gắn vào đầu lò xo có độ cứng k, khối lượng lò xo không đáng kể.\n-  Khi bỏ qua mọi lực cản và lò xo trong giới hạn đàn hồi thì dao động của con lắc lò xo là dao động điều hoà.\n\n__TIKZ_START__/images/tikz/tikz_bai-4_1.svg|\\begin{tikzpicture}\n\\def\\H{1}    % wall height\n\\def\\T{0.3}  % wall thickness\n\\def\\W{2.6}  % ground length\n\\def\\D{0.25} % ground depth\n\\def\\h{0.6}  % mass height\n\\def\\w{0.7}  % mass width\n\\def\\x{1.6}  % mass x position\n\\draw[line width=0.8,blue!7!black!80,snake=coil,segment amplitude=5,segment length=5,line cap=round]\n(0,\\h/2) --++ (\\x,0);\n\\draw[preaction={fill,top color=black!10,bottom color=black!5,shading angle=20},\nfill,pattern=north east lines,draw=none,minimum width=0.3,minimum height=0.6]\n(0,0) |-++ (-\\T,\\H) |-++ (\\T+\\W,-\\H-\\D) -- (\\W,0) -- cycle;\n\\draw (0,\\H) -- (0,0) -- (\\W,0);\n\\draw[line width=0.6,red!30!black,fill=red!40!black!10,rounded corners=1,\ntop color=red!40!black!20,bottom color=red!40!black!10,shading angle=20] (\\x,0) rectangle++ (\\w,\\h) node[midway] {$m$};\n\\end{tikzpicture}__TIKZ_END__\n\n### Tần số góc - Chu kì - Tần số\n\n__BANG_START__\n| Chu kì | Tần số | Tần số góc |\n| --- | --- | --- |\n| \n$$\nT=2\\pi\\sqrt{\\dfrac{m}{k}}\n$$\n | \n$$\nf=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{k}{m}}\n$$\n | \n$$\n\\omega=\\sqrt{\\dfrac{k}{m}}\n$$\n |\n__BANG_END__\n\n> **Chú ý:** \n\n> - **-**  $\\omega$, T, f chỉ phụ thuộc cấu tạo (hay đặc tính) của con lắc lò xo mà không phụ thuộc các yếu tố bên ngoài.\n> - **-**  Khi con lắc lò xo dao động điều hoà thì ta áp dụng được tất cả các công thức của chất điểm dao động điều hoà cho con lắc lò xo.\n> \n\n ### Động năng\n \n$$\n\\begin{aligned}\\boxed{W_{\\ct{đ}}=\\dfrac{1}{2}mv^2}=\\dfrac{1}{2}m\\omega^2A^2\\sin[2](\\omega t+\\varphi)=\\dfrac{m\\omega^2 A^2}{4}\\left[1-\\cos \\left(2\\omega t+2\\varphi\\right)\\right]\\end{aligned}\n$$\n\n \n\n \t-  Động năng cực đại: $$\\boxed{W_{\\text{đ}\\max}=\\dfrac{1}{2}m\\omega^2A^2}$$ khi vật qua vị trí cân bằng.\n \t-  Động năng cực tiểu: $W_{\\text{đ}\\min}=0$ khi vật ở vị trí biên.\n \n\n ### Thế năng\n \\Center{$\\boxed{W_t=\\dfrac{1}{2}kx^2}$=\\dfrac{1}{2}kA^2\\cos[2](\\omega t+\\varphi)=\\dfrac{k A^2}{4}\\left[1+\\cos \\left(2\\omega t+2\\varphi\\right)\\right]}\n \n\n \t-  Thế năng cực đại: $$\\boxed{W_{tmax}=\\dfrac{1}{2}kA^2}$$ khi vật ở vị trí biên.\n \t-  Thế năng cực tiểu: $W_{tmin}=0$; khi vật qua vị trí cân bằng.\n \n\n ### Cơ năng\n \n$$\n\\begin{aligned}\n \t\\boxed{W=W_{\\text{đ}} + W_t=\\dfrac{1}{2}kA^2=\\ct{hằng số}=W_{\\text{đ}max}=W_{tmax}}\n \\end{aligned}\n$$\n\n \n\n> **Lưu ý:** \n\n>  \t\t-  Cơ năng của con lắc lò xo tỉ lệ với bình phương biên độ dao động\n>  \t\t-  Với một lò xo cố định, cơ năng  **không** phụ thuộc vào khối lượng của vật và được bảo toàn nếu bỏ qua mọi lực cản.\n>  \t\t-  Khi dao động điều hòa có tần số góc \\bth{\\omega}, tần số f, chu kì T thì động năng, thế năng biến thiên tuần hoàn với tần số góc \\bth{2\\omega}, tần số 2f, chu kì $\\dfrac{T}{2}$.\n>  \t\t-  Động năng và thế năng biến thiên tuần hoàn cùng biên độ nhưng ngược pha nhau.\n>",
        "exercises": []
      },
      {
        "id": "bai-5",
        "title": "Bài 5: Con lắc đơn",
        "theory": "### Cấu tạo con lắc đơn\nCon lắc đơn gồm sợi dây không dãn có chiều dài $\\ell$, khối lượng sợi dây không đáng kể và vật nặng khối lượng m treo vào đầu dưới sợi dây.\n### Dao động của con lắc đơn\n\n-  Khi bỏ qua lực cản, dao động của con lắc đơn là dao động tuần hoàn.\n\n__TIKZ_START__/images/tikz/tikz_bai-5_1.svg|\\begin{tikzpicture}[draw=Mapcolor, very thick,>=stealth']\n\\tkzDefPoints{0/0/i}\n\\tkzDefShiftPoint[i](-90:3){o}\n\\tkzDefShiftPoint[i](-130:3){a}\n\\tkzDefShiftPoint[i](-60:3){b}\n\\tkzDefShiftPoint[i](-50:3){c}\n\\tkzDefShiftPoint[i](-140:3){x}\n\\tkzDefShiftPoint[i](-40:3){x'}\n\\tkzDefPointBy[projection=onto i--o](b) \\tkzGetPoint{h}\n\\draw[Mapcolor](-0.5,0)--(0.5,0);\n\\fill[pattern=north east lines] (-0.5,0)--(0.5,0)--++(90:0.15)--++(180:1)--cycle;\n\\tkzDrawArc[color=Mapcolor!50,arrows=->](i,x)(x')\n\\tkzDrawArc[color=Mapcolor](i,o)(b)\n\\tkzLabelAngle[pos=2.9](o,i,b){$s$}\n\\tkzDrawPoints[size=2](a,b,c,o,i)\n\\tkzMarkAngles[size=0.4cm](o,i,b)\n\\tkzLabelAngle[pos=0.7](o,i,b){$\\alpha$}\n\\tkzMarkAngles[size=0.5cm](a,i,o)\n\\tkzLabelAngle[pos=0.8](a,i,o){$\\alpha_{0}$}\n\\tkzDrawSegments[dashed,Mapcolor](i,o i,a i,c)\n\\tkzDrawSegments[very thick,Mapcolor](i,b)\n\\shade[ball color=Mapcolor] (b) circle (1.1ex);\n\\tkzLabelPoint[below](o){$O$}\n\\tkzLabelPoint[below left](a){$-S_0$}\n\\tkzLabelPoint[below right](c){$S_0$}\n\\tkzLabelPoint[below =3pt](b){$M$}\n\\tkzLabelPoint[right](x'){$s$}\n\\path (i)--node[midway,above left]{$\\ell$}(a);\n\\end{tikzpicture}__TIKZ_END__\n\n-  Khi bỏ qua lực cản và dao động với góc nhỏ, dao động của con lắc đơn được coi là dao động điều hòa.\n\n### Tần số góc, chu kì, tần số dao động điều hòa của con lắc đơn\n\n__BANG_START__\n| Chu kì | Tần số | Tần số góc |\n| --- | --- | --- |\n| \n$$\nT=2\\pi\\sqrt{\\dfrac{\\ell}{g}}\n$$\n | \n$$\nf=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{g}{\\ell}}\n$$\n | \n$$\n\\omega=\\sqrt{\\dfrac{g}{\\ell}}\n$$\n |\n__BANG_END__\n\n> **Lưu ý:** Tần số góc, chu kì và tần số con lắc đơn dao động điều hòa không phụ thuộc khối lượng của vật.\n\n### Phương trình li độ dài\n\n$$\n\\begin{aligned}\n\\boxed{s=S_0\\cos(\\omega t+\\varphi)}\\quad \\ct{với: }\\begin{cases}\ns:\\ct{ là li độ dài (m)}\\\\\nS_0:\\ct{ là biên độ dài (m)}\\end{cases}\n\\end{aligned}\n$$\n\n### Phương trình li độ góc\n\n$$\n\\begin{aligned}\n\\boxed{\\alpha=\\alpha_0\\cos(\\omega t+\\varphi)}\\quad \\ct{với: }\\begin{cases}\\alpha=\\dfrac{s}{\\ell}:\\ct{ là li độ góc (rad)}\\\\\n\\alpha_0=\\dfrac{S_0}{\\ell}:\\ct{ là biên độ góc (rad)}\\end{cases}\n\\end{aligned}\n$$\n\n### Năng lượng dao động của con lắc đơn\n\n-  Động năng: $$\\boxed{W_{\\text{đ}}=\\dfrac{1}{2}mv^2}$\\quad \\Rightarrow\\begin{cases}W_{\\text{đmax}}=\\dfrac{1}{2}mv_{\\max}^2\\ \\ct{khi vật ở vị trí cân bằng}\\\\\nW_{\\text{đmin}}=0\\ \\ct{khi vật ở biên}\\end{cases}\n$\n-  Thế năng: $$\\boxed{W_t=mg\\ell(1-\\cos\\alpha)}$\\ \\Rightarrow \\begin{cases}W_{\\text{tmax}}=mg\\ell(1-\\cos\\alpha_0)\\ \\ct{khi vật ở biên}\\\\\nW_{\\text{tmin}}=0\\ \\ct{khi vật ở vị trí cân bằng}\\end{cases}$\n-  Cơ năng\n\n$$\n\\begin{aligned}\\boxed{W=W_{\\text{đ}}+W_t=\\dfrac{1}{2}mv^2+mg\\ell(1-\\cos\\alpha)=mg\\ell\\left(1-\\cos\\alpha_0\\right)=\\dfrac{mv_{\\max}^2}{2}=\\ct{hằng số}}\\end{aligned}\n$$\n\n**Khi con lắc đơn dao động điều hòa:**\n\n$$\n\\begin{aligned}\n\\ct{Thế năng: } \\boxed{W_t=\\dfrac{1}{2}mg\\ell\\alpha^2} \\quad  \\ct{Cơ năng: } \\boxed{W=W_{\\text{tmax}}=\\dfrac{1}{2}mg\\ell\\alpha_0^2}\n\\end{aligned}\n$$\n\n> **Lưu ý:** Khi con lắc đơn dao động điều hòa thì các bài toán năng lượng tương tự con lắc lò xo dao động điều hòa.\n\n### Vận tốc vật nặng của con lắc đơn\n\\Textbox{0.6}{\n\n$$\n\\begin{aligned} \\ct{Ta có: }W=\\dfrac{1}{2}mv^2+mg\\ell(1-\\cos\\alpha)=mg\\ell\\left(1-\\cos\\alpha_0\\right)\\end{aligned}\n$$\n\n$$\n\\begin{aligned}\n\\Rightarrow \n\\boxed{v=\\pm \\sqrt{2g\\ell\\left(\\cos \\alpha -\\cos \\alpha_0\\right)}}\\Rightarrow v_{\\max}=\\sqrt{2g\\ell\\left(1-\\cos \\alpha_0\\right)}\n\\end{aligned}\n$$\n\n> **Lưu ý:** Mốc thế năng của con lắc đơn được quy ước chọn tại vị trí cân bằng của con lắc.\n\n}\n\\Textbox{0.4}{\n__TIKZ_START__/images/tikz/tikz_bai-5_2.svg|\\begin{tikzpicture}[draw=Mapcolor, very thick,>=stealth']\n\\tkzDefPoints{0/0/i}\n\\tkzDefShiftPoint[i](-90:3){o}\n\\tkzDefShiftPoint[i](-130:3){a}\n\\tkzDefShiftPoint[i](-60:3){b}\n\\tkzDefShiftPoint[i](-50:3){c}\n\\tkzDefShiftPoint[i](-140:3){x}\n\\tkzDefShiftPoint[i](-40:3){x'}\n\\tkzDefPointBy[projection=onto i--o](b) \\tkzGetPoint{h}\n\\draw[Mapcolor](-0.5,0)--(0.5,0);\n\\fill[pattern=north east lines] (-0.5,0)--(0.5,0)--++(90:0.15)--++(180:1)--cycle;\n\\tkzDrawArc[color=Mapcolor,arrows=->](i,x)(x')\n\\tkzDrawArc[color=Mapcolor!50](i,o)(b)\n\\tkzLabelAngle[pos=2.9](o,i,b){$s$}\n\\tkzDrawPoints[size=2](a,b,c,o,i)\n\\tkzMarkRightAngles(b,h,i)\n\\tkzMarkAngles[size=0.4cm](o,i,b)\n\\tkzLabelAngle[pos=0.7](o,i,b){$\\alpha$}\n\\tkzMarkAngles[size=0.5cm](a,i,o)\n\\tkzLabelAngle[pos=0.8](a,i,o){$\\alpha_{0}$}\n\\draw[->,very thick](b) --++(-90:1.7)coordinate(p);\n\\tkzDefPointBy[projection=onto i--b](p) \\tkzGetPoint{pn}\n\\tkzDefPointBy[translation=from pn to p](b) \\tkzGetPoint{pt}\n\\tkzDefPointBy[symmetry=center b](pn)\\tkzGetPoint{r}\n\\tkzDrawSegments[dashed,Mapcolor](i,o i,a i,c b,h)\n\\tkzDrawSegments[Mapcolor](i,b)\n\\tkzDrawSegments[->,very thick,Mapcolor](b,pn b,pt b,r)\n\\tkzMarkAngles[size=0.4cm](p,b,pn)\n\\tkzLabelAngle[pos=0.7](p,b,pn){$\\alpha$}\n\\tkzLabelPoint[below left=-4pt](pt){\\footnotesize $\\vec{P}_t$}\n\\tkzLabelPoint[below right=-4pt](pn){\\footnotesize $\\vec{P}_n$}\n\\tkzLabelPoint[below](p){\\footnotesize $\\vec{P}$}\n\\tkzLabelPoint[left](r){\\footnotesize $\\vec{T}$}\n\\shade[ball color=Mapcolor] (b) circle (1.1ex);\n\\tkzLabelPoint[below](o){$O$}\n\\tkzLabelPoint[below left](a){$A$}\n\\tkzLabelPoint[right=7pt](b){$B$}\n\\path (h)--node[midway,left]{$h$}(o);\n\\path (i)--node[midway,above left]{$\\ell$}(a);\n\\end{tikzpicture}__TIKZ_END__\n}\n### Công thức độc lập với thời gian\n\n-  Công thức độc lập với thời gian dưới dạng li độ và biên độ dài:\n\n$$\n\\begin{aligned}\n\\boxed{\\left(\\dfrac{s}{S_0}\\right)^2+\\left(\\dfrac{v}{v_{\\max}}\\right)^2=1\\Leftrightarrow S_0^2=s^2+\\dfrac{v^2}{\\omega^2}}\n\\end{aligned}\n$$\n\n-  Công thức độc lập với thời gian dưới dạng li độ và biên độ góc:\n\n$$\n\\begin{aligned}\n\\boxed{\\alpha_0^2=\\alpha^2+\\dfrac{v^2}{(\\ell\\omega)^2}}\n\\end{aligned}\n$$",
        "exercises": []
      },
      {
        "id": "bai-6",
        "title": "Bài 6: Các loại dao động",
        "theory": "### Dao động tắt dần\n\n__TIKZ_START__/images/tikz/tikz_bai-6_1.svg|\\begin{tikzpicture}[draw=Mapcolor,scale=1,thick,>=stealth']\n\\tkzDefPoints{0.4/0.5/v}\n\\draw[->] (0,0)--(8.5,0)node[below]{$t$};\n\\draw[->] (0,-2.5)--(0,2.5)node[right]{$x$};\n\\draw[Mapcolor, line width = 1.2pt, domain=0:7.5, samples=500]%\nplot (\\x, {2*e^(-\\x/4)*cos(\\x*180)});\n\\draw[thick,dashed] plot [smooth,tension=1] coordinates{(0,2)(3,1) (7.5,0.3)};\n\\draw[thick,dashed] plot [smooth,tension=1] coordinates{(0,-2)(3,-1) (7.5,-0.3)};\n\\end{tikzpicture}__TIKZ_END__\n\n> **Lưu ý:** Dao động tắt dần là dao động có biên độ giảm dần theo thời gian.\n\n \n\\vspace*{0.2cm}\n\n-  **Nguyên nhân:** Do vật chuyển động chịu tác dụng của lực ma sát và lực cản của môi trường đó.\n-  **Đặc điểm:**\n\n-  Cơ năng của vật giảm dần và chuyển hóa thành nhiệt năng.\n-  Tùy theo lực cản của môi trường lớn hay nhỏ mà dao động tắt dần diễn ra nhanh hay chậm.\n\n-  \\textbf {Ứng dụng của dao động tắt dần:}\n\n-   Dao động tắt dần có lợi: Bộ phận giảm xóc trên ô tô, xe máy,\\ldots, kiểm tra, thay dầu nhớt.\n-  Dao động tắt dần có hại: Dao động tắt dần ở quả lắc đồng hồ $\\rightarrow$ phải lên dây cót hoặc thay pin.\n\n![Hình ảnh](/images/Hinh/LTK11-2.png)\n\n### Dao động duy trì\n\n> **Lưu ý:** Dao động duy trì là dao động tắt dần nhưng được bù lại năng lượng tiêu hao sao cho không làm thay đổi chu kì riêng và biên độ của vật.\n\n\\vspace*{0.2cm}\n\n-  \n\n **Đặc điểm:**\n\n-  Tần số bằng tần số dao động riêng. \n-  Biên độ không đổi.\n\n![Hình ảnh](/images/Hinh/LTK11.png)\n\n### Dao động cưỡng bức\n\n> **Lưu ý:** Dao động cưỡng bức là dao động luôn chịu tác dụng của ngoại lực biến thiên tuần hoàn, biểu thức ngoại lực có dạng\n> \n$$\n\\begin{aligned}\n> F=F_0\\cos(\\omega t+\\varphi) \n> \\end{aligned}\n$$\n\n![Hình ảnh](/images/Hinh/LTK11-3.png)\n\n-  **Đặc điểm**\n\n-  **Về tần số**: Trong khoảng thời gian ban đầu nhỏ, dao động của vật là một dao động phức tạp vì đó là sự tổng hợp của dao động riêng và dao động do ngoại lực gây ra. Sau khoảng thời gian nhỏ này, dao động riêng bị tắt hẳn, chỉ còn lại dao động do tác dụng của ngoại lực gây ra, đó là dao động cưỡng bức và dao động cưỡng bức này có tần số đúng bằng tần số của lực cưỡng bức. \n-  **Về biên độ**: Dao động cưỡng bức có biên độ phụ thuộc vào $F_0$, vào ma sát và đặc biệt phụ thuộc vào độ chênh lệch tần số f của lực cưỡng bức và tần số riêng $f_0$ của hệ. Nếu tần số f càng gần với tần số riêng $f_0$ thì biên độ của dao động cưỡng bức càng tăng và nếu $f = f_0$ thì xảy ra cộng hưởng.\n\n### Hiện tượng cộng hưởng\n\n> **Lưu ý:** **Hiện tượng cộng hưởng** là hiện tượng biên độ của dao động cưỡng bức tăng đến giá trị cực đại khi $f=f_0$ (tần số của ngoại lực bằng tần số riêng của hệ)\n\n__TIKZ_START__/images/tikz/tikz_bai-6_2.svg|\\begin{tikzpicture}[draw=Mapcolor, very thick,]\n\\definecolor{safetyorange(blazeorange)}{rgb}{1.0, 0.4, 0.0}\n\\definecolor{royalblue(web)}{rgb}{0.25, 0.41, 0.88}\n\\draw[->] (0,0.4) -- ++(7,0) node [below] {\\small Tần số của}node [below=15pt] {\\small lực cưỡng bức};\n\\draw[->] (0.4,0) -- ++(0,6) ;\n\\node  [left,rotate=90] at (0,4.5){\\small Biên độ dao động};\n\\draw[royalblue(web), very thick] (0.8,0.93) .. controls (2.1,1.63) and (2.66,2.53) .. (3.08,4.14) .. controls (3.49,6.09) and (3.49,6.1) .. (3.88,3.95) .. controls (4.19,2.69) and (4.44,1.49) .. (6.71,0.66);\n\\draw[safetyorange(blazeorange), very thick](0.78,0.86) .. controls (2.05,1.2) and (2.72,2.41) .. (3.08,3.14) .. controls (3.42,3.82) and (3.58,3.7) .. (3.88,2.95) .. controls (4.42,1.56) and (5.26,1.06) .. (6.74,0.57);\n\\draw[red!70!black, very thick](0.8,0.81) .. controls (1.97,0.99) and (2.56,1.57) .. (3,1.97) .. controls (3.32,2.24) and (3.51,2.45) .. (3.88,2.03) .. controls (4.39,1.45) and (5.31,0.83) .. (6.68,0.53);\n\n\\draw[dashed] (3.49,0.4) -- ++(0,5.2) node [pos=-0.05] {\\small$f_0$}node [pos=-0.15] {\\small (Tần số riêng)};\n\\draw (4.8,4.8) -- (4,3.5) node [pos=-0.2] {\\scriptsize Lực cản nhỏ};\n\\draw (5,2.3) -- (4.06,1.85) node [pos=0.1, above right] {\\scriptsize Lực cản lớn};\n\\end{tikzpicture}__TIKZ_END__\n\n### Ứng dụng của hiện tượng cộng hưởng\n\n-  **Ưu điểm:** Hiện tượng cộng hưởng có nhiều ứng dụng trong thực tế, ví dụ: chế tạo tần số kế, lên dây đàn, đóng thùng loa,\\ldots\n-  **Nhược điểm:** \n\n-  Mỗi một bộ phận trong máy móc (hoặc cầu cống) đều có thể xem là một hệ dao động có tần số góc $\\omega_0$ riêng.\n-  Khi thiết kế các bộ phận của máy móc cần chú ý đến sự trùng nhau giữa tần số góc $\\omega$ của ngoại lực và tần số góc $\\omega_0$ riêng của các bộ phận này, nếu các bộ phận này dao động trùng nhau về tần số góc thì có thể xảy ra ra hiện tượng cộng hưởng với biên độ rất lớn và có thể làm gãy, vỡ các chi tiết máy móc.\n\n![Hình ảnh](/images/Hinh/LTK11-4.png)",
        "exercises": []
      },
      {
        "id": "on-tap-1",
        "title": "Ôn tập Chương I - Đề 1",
        "theory": "",
        "exercises": [
          {
            "id": "on-tap-1-ex-1",
            "question": "Một vật dao động điều hòa theo phương trình $x = A\\cos\\left(\\omega t + \\varphi \\right)$ ($\\omega  > 0$). Tần số góc của dao động là",
            "options": [
              "$A$",
              "$\\omega$",
              "$\\varphi$",
              "$x$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tTần số góc của dao động là $\\omega$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-2",
            "question": "Một chất điểm dao động theo phương trình $x = 6\\cos \\omega t\\ cm$. Dao động của chất điểm có biên độ là",
            "options": [
              "$6\\ cm$",
              "$3\\ cm$",
              "$2\\ cm$",
              "$12\\ cm$"
            ],
            "correctOption": 0,
            "explanation": "\n\t\t\tPhương trình dao động tổng hợp là: $x = A\\cos \\omega t\\ cm$ $\\Rightarrow$ $A = 6\\ cm$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-3",
            "question": "Trong quá trình dao động, vận tốc của vật có giá trị lớn nhất (cực đại) khi vật",
            "options": [
              "đi qua vị trí cân bằng",
              "đi qua vị trí cân bằng theo chiều dương",
              "đi qua vị trí cân bằng theo chiều âm",
              "ở biên"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tTrong quá trình dao động, vận tốc của vật có giá trị lớn nhất (cực đại) khi vật đi qua vị trí cân bằng theo chiều dương.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-4",
            "question": "Một vật dao động điều hòa với biên độ A, vận tốc cực đại $v_{\\max}$. Vật có tốc độ $0,6v_{\\max}$ khi li độ của vật có độ lớn là",
            "options": [
              "$0,8A$",
              "$0,6A$",
              "$0,4A$",
              "$0,5A$"
            ],
            "correctOption": 0,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Luôn có: $\\left(\\dfrac{x}{A}\\right)^2+\\left(\\dfrac{v}{v_{\\max}}\\right)^2=1\\quad  (*)$\n\t\t\t\t-  Khi $\\left| v \\right|=0,6v_{\\max}\\quad (*) \\Rightarrow \\left(\\dfrac{x}{A}\\right)^2+\\left(\\dfrac{0,6v_{\\max}}{v_{\\max}}\\right)^2=1\\Rightarrow \\left|x\\right|=0,8A$.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-5",
            "question": "Biết pha ban đầu của một vật dao động điều hòa, ta xác định được",
            "options": [
              "quỹ đạo dao động",
              "cách kích thích dao động",
              "chu kì và trạng thái dao động",
              "chiều chuyển động của vật lúc ban đầu"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tPha dao động cho ta biết trạng thái chuyển động của vật.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-6",
            "question": "Một vật dao động điều hòa với biên độ A, tần số 5 Hz. Thời gian ngắn nhất để vật đi từ vị trí có li độ $x_1 = - 0,5A$ đến vị trí có li độ $x_2 = 0,5A$ là",
            "options": [
              "$1\\ s$",
              "$\\dfrac{1}{10}\\ s$",
              "$\\dfrac{1}{30}\\ s$",
              "$\\dfrac{1}{20}\\ s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\n__TIKZ_START__/images/tikz/tikz_on-tap-1_1.svg|\\begin{tikzpicture}\n\t\t\t\t\t\\tkzDefPoints{0/0/o, 5/0/a, 4.325/0/b, 3.525/0/c, 2.5/0/d,  -5/0/h, -4.325/0/g, -3.525/0/f, -2.5/0/e, -6/0/x', 6/0/x}\n\t\t\t\t\t\\tkzDefShiftPoint[e](-90:0.5cm){e1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-90:0.5cm){o1}\n\t\t\t\t\t\\tkzDefShiftPoint[d](-90:0.5cm){d1}\n\t\t\t\t\t\\tkzDrawSegments[blue,->,very thick](x',x)\n\t\t\t\t\t\\tkzDrawPoints[size=5,fill=black](o,a,b,c,d,e,f,g,h)\n\t\t\t\t\t\\tkzLabelPoint[above](o){\\tiny $O$}\n\t\t\t\t\t\\tkzLabelPoint[above](a){\\tiny$A$}\n\t\t\t\t\t\\tkzLabelPoint[above](b){\\tiny$\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](c){\\tiny$\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](d){\\tiny$\\dfrac{A}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](h){\\tiny$-A$}\n\t\t\t\t\t\\tkzLabelPoint[above](g){\\tiny $-\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](f){\\tiny$-\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](e){\\tiny$-\\dfrac{A}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](x){\\tiny$x$}\n\t\t\t\t\t\\tkzDrawSegments[->,very thick,red](e1,o1 o1,d1)\n\t\t\t\t\t\\tkzLabelSegment[below](e1,o1){\\tiny$\\Delta t_1=\\dfrac{T}{12}$}\n\t\t\t\t\t\\tkzLabelSegment[below](o1,d1){\\tiny$\\Delta t_2=\\dfrac{T}{12}$}\n\t\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t\t\n\n\t\t\tTa có: $\\Delta t=\\Delta t_1+\\Delta t_2=\\dfrac{T}{6}=\\dfrac{1}{30}\\ s$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-7",
            "question": "Vật dao động điều hoà với biên độ $6\\ cm$, chu kì $1,2\\ s$. Trong một chu kì, khoảng thời gian để li độ ở trong khoảng $(- 3\\ cm;\\ 3\\ cm)$ là",
            "options": [
              "$0,3\\ s$",
              "$0,2\\ s$",
              "$0,6\\ s$",
              "$0,4\\ s$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Ta thấy $[-3\\ cm;\\ 3\\ cm] = [-\\dfrac{A}{2};\\ \\dfrac{A}{2}]$.\n\t\t\t\t-  Trong nửa chu kì thì vật đi từ vị trí có li độ $\\dfrac{A}{2}$ đến $-\\dfrac{A}{2}$ sẽ ứng với góc quay được là $\\varphi = \\dfrac{\\pi}{3}\\ rad$ và hết khoảng thời gian $t_1 = \\dfrac{T}{6}$. \n\t\t\t\t-  Trong nửa chu kì còn lại vật sẽ có li độ $[-3\\ cm;\\ 3\\ cm]$ trong khoảng thời gian $t_1$ nhưng theo chiều ngược lại.\n\t\t\t\t-  Trong một chu kì, khoảng thời gian để li độ của vật trong khoảng $[-3\\ cm;\\ 3\\ cm]$ là $\\Delta t = 2t_1 = \\dfrac{T}{3} = 0,4\\ s$.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-8",
            "question": "Một vật dao động với phương trình $x=6\\cos\\left( \\dfrac{10\\pi t}{3} \\right)\\ cm$. Tính từ $t = 0$ thời điểm lần thứ $2013$ vật có tốc độ $10\\pi \\ cm/s$ là",
            "options": [
              "$302,35\\ s$",
              "$301,85\\ s$",
              "$302,05\\ s$",
              "$302,15\\ s$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Chu kì: $T=\\dfrac{2\\pi }{\\omega }=0,6\\ s$.\n\t\t\t\t-  Thay tốc độ $10\\pi \\ cm/s$ vào phương trình: $x^2+\\dfrac{v^2}{\\omega ^2}=A^2\\Rightarrow \\left| x\\right|=3\\sqrt{3}\\ cm$. \n\t\t\t\t-  Ta nhận thấy: $\\dfrac{2013}{4}=503$ dư 1 \n\t\t\t\t$\\Rightarrow t=503T+t_1$ nên ta chỉ cần tìm $t_1$:\\\\\n\t\t\t\t$t_1=\\dfrac{T}{12}\\Rightarrow t=503T+\\dfrac{T}{12}=301,85\\ s$. \n\t\t\n",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-9",
            "question": "Một vật dao động điều hoà trên trục Ox, tại thời điểm t nào đó vận tốc có giá trị âm và gia tốc có giá trị dương. Tại thời điểm $t + \\dfrac{T}{2}$ thì",
            "options": [
              "vận tốc và gia tốc có giá trị âm",
              "vận tốc có giá trị dương, gia tốc có giá trị âm",
              "vận tốc và gia tốc có giá trị dương",
              "vận tốc có giá trị âm, gia tốc có giá trị dương"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tThời điểm t, vật có $v < 0,\\ a > 0$, tức vật đang có li độ âm (li độ và gia tốc luôn trái dấu) và đi theo chiều âm, sau $\\dfrac{T}{2}$ trạng thái dao động ngược lại nên vật có $v > 0, a < 0$ (li độ dương).\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-10",
            "question": "Cho chất điểm M đang chuyển động tròn đều trên một quỹ đạo tròn có bán kính bằng $30\\ cm$, với tốc độ góc là $\\pi\\ rad/s$. Gọi P là hình chiếu của điểm M xuống một đường thẳng đi qua tâm và nằm trong mặt phẳng quỹ đạo. Tốc độ chuyển động trung bình của điểm P trong quãng thời gian $3\\ s$ là",
            "options": [
              "$20\\ cm/s$",
              "$60\\ cm/s$",
              "$\\dfrac{20}{3}\\ cm/s$",
              "$40\\ cm/s$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Trong khoảng thời gian 3 s chất điểm quay được góc: $\\Delta \\varphi = 3\\pi = 2\\pi + \\pi\\Rightarrow  \\Delta s = 4A+2A= 180\\ cm$.\n\t\t\t\t-  Tốc độ trung bình bằng: $180:3 = 60\\ cm/s$.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-11",
            "question": "Cho đồ thị hai dao động điều hòa như hình vẽ. Độ lệch pha của chúng là",
            "options": [
              "$\\pi$",
              "$3\\pi$",
              "$\\dfrac{\\pi}{2}$",
              "$0$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tHai dao động cùng pha $\\Delta \\varphi =2k\\pi $",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-12",
            "question": "Một con lắc lò xo có khối lượng vật nhỏ là m dao động điều hòa theo phương ngang với phương trình $x = A\\cos\\omega t$. Mốc tính thế năng ở vị trí cân bằng. Cơ năng của con lắc là",
            "options": [
              "$m\\omega A^2$",
              "$\\dfrac{1}{2}m\\omega A^{2}$",
              "$m\\omega ^{2}A^{2}$",
              "$\\dfrac{1}{2}m\\omega ^{2}A^{2}$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tCơ năng của vật dao động điều hòa: $W = W_{\\text{đ}\\max} = \\dfrac{1}{2}mv_{\\max}^{2} = \\dfrac{1}{2}m\\omega ^2A^2$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-13",
            "question": "Một con lắc lò xo có $k = 40\\ N/m$ và $m = 100\\ g$. Dao động riêng của con lắc này có tần số góc là",
            "options": [
              "$400\\ rad/s$",
              "$0,1\\pi\\ rad/s$",
              "$20\\ rad/s$",
              "$0,2\\pi\\ rad/s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tTần số góc: $\\omega =\\sqrt{\\dfrac{k}{m}}=20\\ rad/s$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-14",
            "question": "Một vật nhỏ dao động điều hòa với tần số góc $10\\ rad/s$. Giá trị còn thiếu trong dấu ? ở đồ thị hình bên là",
            "options": [
              "$400$",
              "$-4$",
              "$40$",
              "$-400$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tTa có: $a_{\\max} = \\omega^2A = 400\\ cm/s^2 = 4\\ m/s^2$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-15",
            "question": "Một con lắc đơn đang dao động điều hòa với phương trình $s = S_0\\cos(\\omega t + \\varphi)\\ (S_0> 0)$. Đại lượng $S_0$ được gọi là",
            "options": [
              "biên độ dài của dao động",
              "tần số của dao động",
              "li độ góc của dao động",
              "pha ban đầu của dao động"
            ],
            "correctOption": 0,
            "explanation": "",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-16",
            "question": "Một chất điểm $M$ chuyển động tròn đều trên quỹ đạo tâm $O$ bán kính $8\\ cm$ với tốc độ dài $200\\ cm/s$. Gọi $P$ là hình chiếu của $M$ lên trục $Ox$ nằm trong mặt phẳng quỹ đạo. Khi $P$ cách $O$ một đoan $b$ thì nó có tốc độ là $100 \\sqrt{2} \\ cm/s$. Giá trị của $b$ là",
            "options": [
              "$4\\ cm$",
              "$4 \\sqrt{2} \\ cm$",
              "$4 \\sqrt{3} \\ cm$",
              "$2\\ cm$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-17",
            "question": "Vận tốc của con lắc đơn có vật nặng khối lượng m, chiều dài dây treo $\\ell$, dao động với biên độ góc $\\alpha _m$ khi qua li độ góc $\\alpha $ được tính theo biểu thức nào sau đây?",
            "options": [
              "$v^2=2mg\\ell\\left({\\cos\\alpha - \\cos\\alpha _m}\\right)$",
              "$v^2=mg\\ell\\left({\\cos\\alpha _m-\\cos\\alpha }\\right)$",
              "$v^2=2g\\ell\\left({\\cos\\alpha -\\cos\\alpha _m}\\right)$",
              "$v^2=mg\\ell\\left({\\cos\\alpha - \\cos\\alpha _m}\\right)$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tVận tốc của con lắc đơn $v^2=2g\\ell\\left({\\cos \\alpha -\\cos \\alpha _m}\\right)$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-18",
            "question": "Một con lắc đơn có chiều dài $\\ell = 1$ m được kéo ra khỏi vị trí cân bằng một góc $\\alpha _0=5^\\circ$ so với phương thẳng đứng rồi thả nhẹ cho vật dao động. Cho $g=\\pi ^2=10\\ m/s^2$. Tốc độ của con lắc khi về đến giá trị cân bằng có giá trị là",
            "options": [
              "$15,8\\ m/s$",
              "$0,278\\ m/s$",
              "$0,028\\ m/s$",
              "$0,087\\ m/s$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tVận tốc con lắc khi qua vị trí cân bằng:  $v_{\\max}=\\omega.S_0=\\sqrt{\\dfrac{g}{\\ell}}.\\ell.\\alpha_0=0,278$ m/s.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-1-ex-19",
            "question": "Một vật dao động điều hòa với phương trình: $x=10 \\cos \\left(2 \\pi t-\\dfrac{\\pi}{2}\\right)\\ cm$ (t đo bằng giây).",
            "options": [
              "Thời gian ngắn nhất vật đi từ vị trí có li độ $-10 \\ cm$ đến vị trí có li độ $-5 \\ cm$ là $0,5 \\ s$",
              "Thời gian ngắn nhất vật đi từ vị trí có li độ $5 \\sqrt{3} \\ cm$ đến vị trí cách vị trí cân bằng $5 \\ cm$ là $\\dfrac{1}{4} \\ s$",
              "Thời gian ngắn nhất vật đi từ vị trí cân bằng đến vị trí có li độ $5 \\sqrt{2} \\ cm$ là $\\dfrac{1}{8}\\ s$",
              "Thời gian ngắn nhất vật đi từ vị trí cách vị trí cân bằng $5 \\ cm$ đến vị trí có li độ $-5 \\sqrt{2} \\ cm$ là $\\dfrac{1}{24} \\ s$"
            ],
            "correctOption": [
              false,
              false,
              true,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-1-ex-20",
            "question": "Cho một vật dao động điều hòa với phương trình $x=A\\cos(\\omega t+\\varphi)$.",
            "options": [
              "Khoảng thời gian ngắn nhất sau đó trạng thái dao động lặp lại như cũ gọi là tần số dao động",
              "Đại lượng không đổi theo thời gian là biên độ dao động",
              "Quỹ đạo dao động của vật được biểu diễn dưới dạng hình sin",
              "Pha ban đầu của dao động phụ thuộc vào gốc thời gian và chiều dương của hệ tọa độ"
            ],
            "correctOption": [
              false,
              true,
              false,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-1-ex-21",
            "question": "Một chất điểm dao động điều hòa với biên độ $6 \\ cm$ và chu kì $2 \\ s$.",
            "options": [
              "Thời gian dài nhất để chất điểm đi được quãng đường bằng $18 \\ cm$ là $\\dfrac{4}{3} \\ s$",
              "Thời gian ngắn nhất để chất điểm đi được quãng đường bằng $6 \\sqrt{3} \\ cm$ là $\\dfrac{2}{3} \\ s$",
              "Thời gian dài nhất để chất điểm đi được quãng đường $6 \\ cm$ là $0,4 \\ s$",
              "Thời gian dài nhất để chất điểm đi quãng được đường bằng $66 \\ cm$ là $\\dfrac{16}{3} \\ s$"
            ],
            "correctOption": [
              false,
              true,
              false,
              false
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Sai\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-1-ex-22",
            "question": "Một con lắc lò xo nằm ngang dao động điều hòa  với lò xo có độ cứng $k$, vật nặng có khối lượng $m$.",
            "options": [
              "Vị trí cân bằng của dao động cũng là vị trí lò xo có chiều dài tự nhiên",
              "Chu kì dao động là $T=2 \\pi \\sqrt{\\dfrac{m}{k}}$",
              "Tần số dao động là $f=\\dfrac{1}{2 \\pi} \\sqrt{\\dfrac{m}{k}}$",
              "Khoảng thời gian vật đi từ biên về vị trí cân bằng là $t=\\dfrac{T}{4}$"
            ],
            "correctOption": [
              true,
              true,
              false,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\t-  Sai. Tần số dao động là $f=\\dfrac{1}{2 \\pi} \\sqrt{\\dfrac{k}{m}}$.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-1-ex-23",
            "question": "Một chất điểm dao động điều hoà với phương trình $x=8 \\cos 5 t$ (x tính bằng $cm$, $t$ tính bằng $s$). Tốc độ của chất điểm khi đi qua vị trí cân bằng là bao nhiêu $cm/s$?",
            "options": [],
            "correctOption": "40",
            "explanation": "\n\t\t$40 \\ cm/s$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-1-ex-24",
            "question": "Một chất điểm dao động điều hòa theo phương trình $x=5 \\sin \\left(2 \\pi t+\\dfrac{\\pi}{3}\\right)\\ cm$. Thời điểm chất điểm đi qua vị trí có li độ $-2,5 \\ cm$ theo chiều dương lần thứ $2024$ là bao nhiêu phút kể từ thời điểm ban đầu (làm tròn kết quả đến chữ số hàng phần mười)?",
            "options": [],
            "correctOption": "33,7",
            "explanation": "\n\t\t33,7 phút\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-1-ex-25",
            "question": "Một vật dao động điều hòa với chu kì $T$. Thời gian ngắn nhất vật đi từ vị trí gia tốc vật có giá trị cực đại đến vị trí vận tốc vật có giá trị cực tiểu là bao nhiêu chu kì?",
            "options": [],
            "correctOption": "0,75",
            "explanation": "\n\t\t0,75\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-1-ex-26",
            "question": "Một chất điểm dao động điều hòa với phương trình $x=4 \\cos \\left(4 \\pi t+\\dfrac{2 \\pi}{3}\\right)\\ (cm)$ ($t$ tính bằng $s$). Quãng đường lớn nhất chất điểm đi được bằng bao nhiêu $cm$ trong khoảng thời gian $\\Delta t=\\dfrac{1}{8} \\ s$ (làm tròn kết quả đến chữ số hàng phần trăm)?",
            "options": [],
            "correctOption": "5,66",
            "explanation": "\n\t\t$5,66 \\ cm$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-1-ex-27",
            "question": "Con lắc lò xo treo thẳng đứng, dao động điều hòa với phương trình $x=5 \\cos \\left(4 \\pi t+\\dfrac{\\pi}{3}\\right)\\ cm$. Chiều dài tự nhiên của lò xo là $40 \\ cm$. Chọn chiều dương hướng lên. Lấy $g=\\pi^2 \\ m/s^2$. Chiều dài của lò xo là bao nhiêu  centimet khi vật dao động được $\\dfrac{2T}{3}$, kể từ thời điểm $t=0$ (làm tròn kết quả đến chữ số hàng phần mười)?",
            "options": [],
            "correctOption": "43,8",
            "explanation": "43,8",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-1-ex-28",
            "question": "Một con lắc lò xo treo thẳng đứng tại nơi có $g = 10\\ m/s^2$. Vật đang cân bằng thì lò xo giãn $5\\ cm$. Kéo vật xuống dưới vị trí cân bằng $1\\ cm$ rồi truyền cho nó tốc độ $v_0$. Sau đó vật dao động điều hòa với tốc độ cực đại $30\\sqrt{2}\\ cm/s$. Giá trị của $v_0$ là bao nhiêu cm/s?",
            "options": [],
            "correctOption": "40",
            "explanation": "\n\t\t\n\n\t\t\t-  Ta có: $\\Delta \\ell_0 = 5\\ cm \\Rightarrow \\omega  = 10\\sqrt{2}\\  rad/s,\\ v_{\\max} =  30\\sqrt{2}\\ cm/s \\Rightarrow A = 3\\ cm$.\n\t\t\t-  Khi truyền tốc độ $v_0$, vật đang có $\\left|x\\right| = 1\\ cm \\Rightarrow v_0=\\omega \\sqrt{A^2-x^2}=  40\\ cm/s.$\t\n\t\t\n\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          }
        ]
      },
      {
        "id": "on-tap-2",
        "title": "Ôn tập Chương I - Đề 2",
        "theory": "",
        "exercises": [
          {
            "id": "on-tap-2-ex-1",
            "question": "Một vật dao động điều hòa theo phương trình $x = A\\cos\\left(\\omega t + \\varphi \\right)$ ($A > 0$). Biên độ dao động của vật là",
            "options": [
              "$A$",
              "$\\varphi$",
              "$\\omega$",
              "$x$"
            ],
            "correctOption": 0,
            "explanation": "\n\t\t\tBiên độ dao động của vật là A.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-2",
            "question": "Một chất điểm dao động có phương trình $x=10\\cos\\left(15t+\\pi\\right)$ (x tính bằng\\ cm, t tính bằng s). Chất điểm này dao động với tần số góc là",
            "options": [
              "$20\\ rad/s$",
              "$10\\ rad/s$",
              "$5\\ rad/s$",
              "$15\\ rad/s$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tTa có: $\\omega =15\\ rad/s$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-3",
            "question": "Trong quá trình dao động, vận tốc của vật có giá trị bằng không (vật dừng lại tức thời) khi vật ở",
            "options": [
              "biên dương ($x = A$)",
              "biên âm ($x = -A$)",
              "đi qua vị trí cân bằng theo chiều âm",
              "biên dương hoặc biên âm"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tTrong quá trình dao động, vận tốc của vật có giá trị bằng không (vật dừng lại tức thời) khi vật ở biên dương hoặc biên âm.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-4",
            "question": "Một chất điểm dao động điều hòa trên trục Ox. Trong thời gian $31,4\\ s$ chất điểm thực hiện được $100$ dao động toàn phần. Lúc chất điểm đi qua vị trí có li độ $2\\ cm$ theo chiều âm với tốc độ là $40\\sqrt{3}\\ cm/s$. Lấy $\\pi = 3,14$. Biên độ dao động của chất điểm là",
            "options": [
              "$4\\ cm$",
              "$2\\sqrt{2}\\ cm$",
              "$3\\ cm$",
              "$2\\sqrt{3}\\ cm$"
            ],
            "correctOption": 0,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Chu kì: $T = \\dfrac{31,4}{100} = \\dfrac{\\pi}{10}\\ s \\Rightarrow \\omega = 20\\ rad/s$.\n\t\t\t\t-  Sử dụng phương trình độc lập thời gian, ta được phương trình:\n\t\t\t\t\n$$\n\\begin{aligned}\n\t\t\t\t\t\\dfrac{2^2}{A^2} + \\dfrac{(40\\sqrt{3})^2}{20^2.A^2}= 1\\Rightarrow A = 4\\ cm.\n\t\t\t\t\\end{aligned}\n$$\n\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-5",
            "question": "Cho một chất điểm đang dao động điều hòa với biên độ A. Biết tại thời điểm ban đầu $\\left(t = 0\\right)$ chất điểm đi qua vị trí có li độ $\\dfrac{A}{2}$ và đang chuyển động theo chiều dương của trục tọa độ. Pha ban đầu của dao động là",
            "options": [
              "$\\dfrac{\\pi}{4}\\ rad$",
              "$\\dfrac{\\pi}{6}\\ rad$",
              "$\\dfrac{\\pi}{3}\\ rad$",
              "$-\\dfrac{\\pi}{3}\\ rad$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tSử dụng đường tròn lượng giác ta suy ra được pha của dao động là $-\\dfrac{\\pi}{3}$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-6",
            "question": "Vật dao động điều hòa theo phương trình $x = 4\\cos(8\\pi t - \\dfrac{\\pi}{6})\\ cm$. Thời gian ngắn nhất vật đi từ  $-2\\sqrt{3}$  cm theo chiều dương đến vị trí có li độ  $2\\sqrt{3}\\ cm$ theo chiều dương là",
            "options": [
              "$\\dfrac{1}{10}\\ s$",
              "$\\dfrac{1}{20}\\ s$",
              "$\\dfrac{1}{12}\\ s$",
              "$\\dfrac{1}{16}\\ s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\n__TIKZ_START__/images/tikz/tikz_on-tap-2_1.svg|\\begin{tikzpicture}\n\t\t\t\t\t\\tkzDefPoints{0/0/o, 5/0/a, 4.325/0/b, 3.525/0/c, 2.5/0/d,  -5/0/h, -4.325/0/g, -3.525/0/f, -2.5/0/e, -6/0/x', 6/0/x}\n\t\t\t\t\t\\tkzDefShiftPoint[g](-90:0.5cm){g1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-90:0.5cm){o1}\n\t\t\t\t\t\\tkzDefShiftPoint[b](-90:0.5cm){b1}\n\t\t\t\t\t\\tkzDrawSegments[blue,->,very thick](x',x)\n\t\t\t\t\t\\tkzDrawPoints[size=5,fill=black](o,a,b,c,d,e,f,g,h)\n\t\t\t\t\t\\tkzLabelPoint[above](o){\\tiny $O$}\n\t\t\t\t\t\\tkzLabelPoint[above](a){\\tiny$A$}\n\t\t\t\t\t\\tkzLabelPoint[above](b){\\tiny$\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](c){\\tiny$\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](d){\\tiny$\\dfrac{A}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](h){\\tiny$-A$}\n\t\t\t\t\t\\tkzLabelPoint[above](g){\\tiny $-\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](f){\\tiny$-\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](e){\\tiny$-\\dfrac{A}{2}$}\n\t\t\t\t\t\\tkzLabelPoint[above](x){\\tiny$x$}\n\t\t\t\t\t\\tkzDrawSegments[->,very thick,red](g1,o1 o1,b1)\n\t\t\t\t\t\\tkzLabelSegment[below](g1,o1){\\tiny$\\dfrac{T}{6}$}\n\t\t\t\t\t\\tkzLabelSegment[below](o1,b1){\\tiny$\\dfrac{T}{6}$}\n\t\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t\t\n\n\t\t\tKhoảng thời gian ngắn nhất cần tìm là: $\\Delta t  = \\dfrac{T}{6}+\\dfrac{T}{6}=\\dfrac{T}{3}=\\dfrac{1}{12}\\ s$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-7",
            "question": "Cho một chất điểm đang dao động điều hòa với chu kì bằng $3\\ s$ và biên độ bằng $6\\ cm$. Trong một chu kì dao động, tổng thời gian mà khoảng cách từ chất điểm tới vị trí cân bằng lớn hơn $3\\sqrt{2}\\ cm$ là",
            "options": [
              "$\\dfrac{4}{3}\\ s$",
              "$\\dfrac{2}{3}\\ s$",
              "$1,5\\ s$",
              "$\\dfrac{3}{4}\\ s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\t-  \n\t\t\t\t\tTa có: $|x|> +3\\sqrt{2}\\ cm \\Rightarrow x> +3\\sqrt{2}\\ cm$ hoặc $x< -3\\sqrt{2}\\ cm$\n\t\t\t\t\t-  Ta biểu diễn các điểm có li độ $3\\sqrt{2}$ trên đường tròn lượng giác như hình vẽ.\n\t\t\t\t\t-  Trong một chu kì dao động, khoảng cách từ chất điểm tới vị trí cân bằng lớn hơn $3\\sqrt{2}$  khi nó đi từ vị trí $M_1$ đến $M_2$ và từ $M_3$ đến $M_0\\Rightarrow t = \\dfrac{T}{4}+\\dfrac{T}{4} = \\dfrac{T}{2} = \\dfrac{3}{2} = 1,5\\ s$.\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-2_2.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\t\t\t\t\t\\tkzDefPoints{-2.5/0/m, 2.5/0/n, 0/0/o, 0/2.5/p, 0/-2.5/q}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-135:2){0}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-45:2){1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](45:2){2}\n\t\t\t\t\t\\tkzDefShiftPoint[o](135:2){3}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](1) \\tkzGetPoint{h}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](0) \\tkzGetPoint{h'}\n\t\t\t\t\t\\draw(o)circle(2cm);\n\t\t\t\t\t\\tkzDrawSegments[dashed](0,3 1,2)\n\t\t\t\t\t\\tkzDrawSegments(p,q)\n\t\t\t\t\t\\tkzDrawSegments[->](m,n)\n\t\t\t\t\t\\tkzDrawSegments[blue,->](o,1 o,2 o,0 o,3)\n\t\t\t\t\t\\tkzDrawPoints[size=3](o,1,h,0,2,3,h')\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](1,o,2)\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](3,o,0)\n\t\t\t\t\t\\node at (0)[below left]{$M_0$};\n\t\t\t\t\t\\node at (1)[below right]{$M_1$};\n\t\t\t\t\t\\node at (2)[above right]{$M_2$};\n\t\t\t\t\t\\node at (3)[above left]{$M_3$};\n\t\t\t\t\t\\node at (2,0)[below right]{$6$};\n\t\t\t\t\t\\node at (h')[below]{$-3\\sqrt{2}$};\n\t\t\t\t\t\\node at (h)[below]{$3\\sqrt{2}$};\n\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-8",
            "question": "Một vật dao động điều hòa với chu kì  là $\\pi\\ s$. Trong một chu kì, thời gian vận tốc của vật có giá trị không vượt quá một nửa tốc độ cực đại là",
            "options": [
              "$\\dfrac{\\pi}{6}$ s",
              "$\\dfrac{2\\pi}{3}$ s",
              "$\\dfrac{\\pi}{3}$ s",
              "$\\dfrac{\\pi}{4}$ s"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t- \tDựa vào đường tròn vận tốc ta có thời gian thỏa mãn $v\\le \\dfrac{{{v}_{\\max}}}{2}$ là $\\dfrac{2T}{3}=\\dfrac{2\\pi}{3}$.\n\t\t\t\t\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-9",
            "question": "Một chất điểm dao động điều hoà với chu kì $T=\\dfrac{\\pi}{10}\\ s$ và biên độ $A = 6\\ cm$. Quãng đường vật đi được trong $10\\pi\\ s$ là",
            "options": [
              "$9\\ m$",
              "$24\\ m$",
              "$6\\ m$",
              "$1\\ m$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  \t\tTa có:\n\t\t\t\t$t = 100T \\Rightarrow S = 100.4A = 400A = 24\\ m$ (1T đi được 4A).\n\t\t\t\t\n\t\t\t\n\n\t\t\t\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-10",
            "question": "Cho một chất điểm dao động điều hòa theo phương trình $x = A\\cos(\\pi t + \\dfrac{\\pi}{4})$, x tính bằng cm và t tính bằng s. Tính từ thời điểm ban đầu, tốc độ trung bình của vật trong $3,5\\ s$ chuyển động là $6,36\\ cm/s$. Biên độ dao động của chất điểm là",
            "options": [
              "$6\\ cm$",
              "$3\\ cm$",
              "$4\\ cm$",
              "$5\\ cm$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\n\n\t\t\t\t\t-  $T = \\dfrac{2\\pi}{\\pi} = 2\\ s$.\n\t\t\t\t\t-  Ta có: $t = 3,5\\ s = 1.2 + 1,5$.\n\t\t\t\t\t-  Ta biểu diễn vị trí ban đâu của vật bằng điểm $M_0$ trên đường tròn lượng giác như hình vẽ.\n\t\t\t\t\t-  Trong khoảng thời gian 2 s, vật quay được góc $2\\pi$, tương ứng đi được quãng đường 4A và lại quay về vị trí $M_0$.\n\t\t\t\t\t-  Trong khoảng thời gian 1,5 giây tiếp theo, vật quay thêm được 1 góc $\\dfrac{3\\pi}{2}$, đến vị trí $M_1$ trên đường tròn lượng giác.\n\t\t\t\t\t-  Quãng đường chất điểm đi được trong 3,5 s là $s = 4A \\dfrac{A}{\\sqrt{2}}+2A+ \\dfrac{A}{\\sqrt{2}} = 6A+A\\sqrt{2} = 2,5.6,36\\Rightarrow  A = 3\\ cm$.\n\t\t\t\t\n\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-2_3.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\t\t\t\t\t\\tkzDefPoints{-2.5/0/m, 2.5/0/n, 0/0/o, 0/2.5/p, 0/-2.5/q}\n\t\t\t\t\t\\tkzDefShiftPoint[o](45:2){0}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-45:2){m'}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](m') \\tkzGetPoint{h}\n\t\t\t\t\t\\draw(o)circle(2cm);\n\t\t\t\t\t\\tkzDrawSegments[dashed](m',0)\n\t\t\t\t\t\\tkzDrawSegments(p,q)\n\t\t\t\t\t\\tkzDrawSegments[->](m,n)\n\t\t\t\t\t\\tkzDrawSegments[blue,->](o,0 o,m')\n\t\t\t\t\t\\tkzDrawPoints[size=3](o,h,0,m')\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](0,o,m')\n\t\t\t\t\t\\node at (0)[above right]{$M_0$};\n\t\t\t\t\t\\node at (m')[below right]{$M_1$};\n\t\t\t\t\t\\node at (2,0)[below right]{$A$};\n\t\t\t\t\t\\node at (h)[below]{$\\dfrac{A}{\\sqrt{2}}$};\n\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-11",
            "question": "Một vật dao động điều hòa trên trục Ox. Hình vẽ bên là đồ thị biểu diễn sự phụ thuộc của li độ x vào thời gian t. Tần số của dao động là",
            "options": [
              "$\\dfrac{5}{\\pi}\\ Hz$",
              "$2\\ Hz$",
              "$2,5\\ Hz$",
              "$\\dfrac{2,5}{\\pi}\\ Hz$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tChu kì của dao động: $T=0,4\\ s\\Rightarrow f=2,5\\ Hz$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-12",
            "question": "Hình bên là ảnh chụp một máy phát điện gió trên đất liền có chiều dài sải cánh là 120 m. Giả sử vào giữa trưa khi các tia sáng Mặt Trời vuông góc với mặt đất và cánh quạt đang quay ngược chiều kim đồng hồ với tốc độ ổn định là 20 vòng/phút. Chọn mốc tính thời gian lúc cánh quạt số 1 nằm song song với mặt đất, hướng theo chiều dương của trục Ox. Tốc độ bóng đen (theo đơn vị m/s) của đầu mút cánh số 2 trên mặt đất tại thời điểm $t=0,75\\ s$ là",
            "options": [
              "$108\\ m/s$",
              "$145\\ m/s$",
              "$126\\ m/s$",
              "$187\\ m/s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\t-  TLN: 126\n\t\t\t\t\t-  Ta có: $\\omega=20\\ \\ct{vòng/phút}=\\dfrac{2\\pi}{3}\\ rad/s$.\n\t\t\t\t\t-  $\\Delta \\varphi=\\omega .\\Delta t=0,75.\\dfrac{2\\pi}{3}=\\dfrac{\\pi}{2}$.\n\t\t\t\t\t-  Từ hình vẽ ta thấy li độ của đầu mút cánh số 2 ở thời điểm 0,75 s là: $x_2=-60\\sqrt{3}\\ cm$.\n\t\t\t\t\t-  Tốc độ khi đó: $v_2=\\dfrac{\\omega A}{2}=\\dfrac{\\dfrac{2\\pi}{3}.120}{2}\\approx 126\\ m/s$.\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-2_5.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\\tkzDefPoints{0/0/o}\n\t\t\t\t\t\\draw (o) circle(2cm);\n\t\t\t\t\t\\draw[->] (-2.5,0) -- (2.5,0);\n\t\t\t\t\t\\draw[very thick,red] (0,0) -- (2,0);\n\t\t\t\t\t\\draw[very thick,red] (0,0) -- (-1,1.75);\n\t\t\t\t\t\\draw[very thick,red] (0,0) -- (-1,-1.75);\n\t\t\t\t\t\\draw[very thick,blue] (0,0) -- (0,2);\n\t\t\t\t\t\\draw[very thick,blue] (0,0) -- (-1.75,-1);\n\t\t\t\t\t\\draw[very thick,blue] (0,0) -- (1.75,-1);\n\t\t\t\t\t\\tkzDrawPoints[size=4,fill=white](o)\n\t\t\t\t\t\\node[red] at (2.25,2) {$(t=0)$};\n\t\t\t\t\t\\node[red] at (2.5,0.5) {$(1)$};\n\t\t\t\t\t\\node[red] at (-1.25,2) {$(2)$};\n\t\t\t\t\t\\node[red] at (-1.25,-2.25) {$(3)$};\n\t\t\t\t\t\\node[blue] at (0,2.25) {$(1)$};\n\t\t\t\t\t\\node[blue] at (-2.25,-1.25) {$(2)$};\n\t\t\t\t\t\\node[blue] at (2.25,-1.25) {$(3)$};\n\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-13",
            "question": "Một con lắc lò xo gồm lò xo có độ cứng $k=200\\ N/m$, vật nhỏ khối lượng m, dao động điều hòa với tần số góc $20\\ rad/s$. Giá trị của m là",
            "options": [
              "$100\\ g$",
              "$200\\ g$",
              "$400\\ g$",
              "$500\\ g$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tTần số góc $\\omega $ dao động của con lắc lò xo là:\n\t\t\t$\\omega =\\sqrt{\\dfrac{k}{m}}\\Leftrightarrow 20=\\sqrt{\\dfrac{200}{m}}\\Rightarrow m=0,5\\ kg=500\\ g$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-14",
            "question": "Một con lắc lò xo gồm vật nhỏ có khối lượng m và lò xo có độ cứng k, dao động điều hòa với phương trình $x=A\\cos \\left({\\omega t+\\varphi }\\right)$. Mốc thế năng ở vị trí cân bằng. Cơ năng của con lắc là",
            "options": [
              "$\\dfrac{1}{2}{mA}^2$",
              "$\\dfrac{1}{2}{kA}^2$",
              "$\\dfrac{1}{2}{mx}^2$",
              "$\\dfrac{1}{2}{kx}^2$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tCơ năng của con lắc là $\\dfrac{1}{2}{kA}^2$. \n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-15",
            "question": "Một con lắc đơn có chiều dài $\\ell$ dao động điều hòa tại nơi có gia tốc trọng trường $g$. Chu kì dao động riêng của con lắc này là",
            "options": [
              "$\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{\\ell}{g}}$",
              "$\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{g}{\\ell}}$",
              "$2\\pi \\sqrt{\\dfrac{\\ell}{g}}$",
              "$2\\pi \\sqrt{\\dfrac{g}{\\ell}}$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tChu kì dao động của con lắc đơn: $T=2\\pi \\sqrt{\\dfrac{\\ell}{g}}$",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-16",
            "question": "Một con lắc lò xo dao động điều hòa theo phương thẳng đứng, trong quá trình dao động của vật lò xo có chiều dài biến thiên từ $12\\ cm$ đến $20\\ cm$. Biên độ dao động của vật là",
            "options": [
              "$8\\ cm$",
              "$4\\ cm$",
              "$16\\ cm$",
              "$10\\ cm$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tBiên độ dao động của vật: $A=\\dfrac{\\ell_{\\max}-\\ell_{\\min}}{2}=4\\ cm$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-17",
            "question": "Với gốc thế năng được chọn tại vị trí cân bằng. Phát biểu nào sau đây là **sai** khi nói về cơ năng của con lắc đơn khi dao động điều hòa?",
            "options": [
              "Cơ năng bằng thế năng của vật ở vị trí biên",
              "Cơ năng bằng tổng động năng và thế năng của vật khi qua vị trí bất kì",
              "Cơ năng của con lắc đơn tỉ lệ thuận với biên độ góc",
              "Cơ năng bằng động năng của vật khi qua vị trí cân bằng"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tCơ năng của con lắc đơn không tỉ lệ thuận với biên độ góc $\\Rightarrow $ C sai.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-18",
            "question": "Con lắc đơn chiều dài $1\\ m$ dao động nhỏ với chu kì $1,5\\ s$ và biên độ góc là $0,05\\ rad$. Độ lớn vận tốc khi vật có li độ góc $0,04\\ rad$ là",
            "options": [
              "$9\\pi \\ cm/s$",
              "$3\\pi \\ cm/s$",
              "$4\\pi \\ cm/s$",
              "$\\dfrac{4\\pi}{3}\\ cm/s$"
            ],
            "correctOption": 2,
            "explanation": "Độ lớn vận tốc khi vật có li độ góc 0,04 rad\n\t\t\t\n$$\n\\begin{aligned}\n\t\t\t\t\\begin{cases}\n\t\t\t\t\tT=2\\pi \\sqrt{\\dfrac{\\ell}{g}}\\Rightarrow g=\\dfrac{4\\pi ^2\\ell}{T^2}\n\t\t\t\t\t\\\\\n\t\t\t\t\tv^2=g\\ell\\left(\\alpha_0^2-\\alpha ^2\\right)=\\dfrac{4\\pi ^2\\ell^2}{T^2}\\left(\\alpha_0^2-\\alpha ^2\\right)\\Rightarrow \\left|v\\right|=0,04\\pi \\ m/s\\\\ \n\t\t\t\t\\end{cases}\n\t\t\t\\end{aligned}\n$$\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-2-ex-19",
            "question": "Dao động cơ học xuất hiện trong nhiều hệ thống, từ dao động của con lắc đồng hồ đến sự nhún của lò xo giảm xóc ô tô.",
            "options": [
              "Dao động cơ học là chuyển động qua lại của một vật xung quanh vị trí cân bằng",
              "Dao động cơ của một vật luôn là dao động tuần hoàn",
              "Dao động điều hòa là dao động trong đó li độ được mô tả bằng một định luật dạng cosin (hay sin) theo thời gian",
              "Dao động điều hòa là trường hợp đặc biệt của dao động tuần hoàn"
            ],
            "correctOption": [
              true,
              false,
              true,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-2-ex-20",
            "question": "Một chất điểm dao động điều hòa với phương trình $x=8 \\cos 2 \\pi t\\ cm$.",
            "options": [
              "Chu kì dao động của chất điểm là $1 \\ s$",
              "Trong nửa chu kì đầu tiên, vận tốc của vật bằng không ở thời điểm $t=\\dfrac{1}{8} \\ s$",
              "Thời điểm thứ nhất vật đi qua vị trí cân bằng là $\\dfrac{1}{4} \\ s$",
              "Từ thời điểm ban đầu, vật đi qua vị trí biên âm lần thứ $3$ là $4 \\ s$"
            ],
            "correctOption": [
              true,
              false,
              true,
              false
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-2-ex-21",
            "question": "Một chất điểm dao động điều hòa dọc theo trục $O x$, quanh vị trí cân bằng $O$ với tần số $f$ và biên độ dao động là $A$.",
            "options": [
              "Thời gian ngắn nhất để chất điểm đi được quãng đường có độ dài $A \\sqrt{3}$ là $\\dfrac{\\pi}{6 \\omega}$",
              "Gọi $t_1$ và $t_2$ lần lượt là khoảng thời gian ngắn nhất và dài nhất để chất điểm đi được quãng đường bằng biên độ. Tỉ số $\\dfrac{t_1}{t_2}$ bằng $\\dfrac{\\sqrt{2}}{2}$",
              "Thời gian ngắn nhất để chất điểm đi được quãng đường có độ dài $3A$ là $\\dfrac{5}{6 f}$",
              "Thời gian ngắn nhất để chất điểm đi được quãng đường có độ dài $A$ là $\\dfrac{1}{6 f}$"
            ],
            "correctOption": [
              false,
              false,
              false,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-2-ex-22",
            "question": "Một con lắc lò xo dao động trên mặt phẳng nằm ngang với phương trình $x=5 \\cos \\left(5 \\pi t-\\dfrac{\\pi}{4}\\right)\\ cm$. Khi vật ở vị trí cân bằng lò xo có chiều dài là $30 \\ cm$.",
            "options": [
              "Biên độ dao động vật là $5 \\pi\\ cm$",
              "Tại vị trí $t=0$ vật có li độ $x=5 \\sqrt{2}\\ cm$",
              "Tốc độ cực đại trong quá trình dao động là $v=25 \\pi\\ cm/s$",
              "Chiều dài cực đại lò xo trong quá trình dao động là $35 \\ cm$"
            ],
            "correctOption": [
              false,
              false,
              true,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai. Biên độ dao động vật là $5\\ cm$.\n\t\t\t-  Sai. Tại vị trí $t=0$ vật có li độ $x= \\dfrac{5\\sqrt{2}}{2}\\ cm$.\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-2-ex-23",
            "question": "Một chất điểm dao động điều hòa dọc theo trục $O x$ trên quỹ đạo dài $10 \\ cm$. Biết chất điểm thực hiện được 20 dao động toàn phần trong $5 \\ s$. Tốc độ cực đại của vật trong quá trình dao động bằng bao nhiêu $m/s$ (làm tròn kết quả đến chữ số hàng phần trăm)?",
            "options": [],
            "correctOption": "1,26",
            "explanation": "\n\t\t$1,26 \\ m/s$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-2-ex-24",
            "question": "Một chất điểm dao động điều hòa theo phương trình $x=8 \\cos \\left(\\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3}\\right)$ ($x$ tính bằng $cm$, $t$ tính bằng $s$). Kể từ $t=11,25 \\ s$, chất điểm cách vị trí cân bằng $4 \\ cm$ và đang chuyển động ra xa vị trí cân bằng lần thứ 15 tại thời điểm bao nhiêu giây?",
            "options": [],
            "correctOption": "33",
            "explanation": "\n\t\t$33 \\ s$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-2-ex-25",
            "question": "Một vật dao động điều hòa với phương trình $x=4 \\cos (\\omega t-\\dfrac{\\pi}{3})\\ cm$. Trong một chu kì dao động, khoảng thời gian mà vật có độ lớn gia tốc $\\left|a\\right|>\\dfrac{a_{\\max}}{2}$ là $0,4 \\ s$. Khoảng thời gian kể từ khi vật dao động đến khi vật qua vị trí có tốc độ bằng $\\dfrac{v_{\\max}}{2}$ lần thứ hai là bao nhiêu giây?",
            "options": [],
            "correctOption": "0,15",
            "explanation": "\n\t\t0,15\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-2-ex-26",
            "question": "Một chất điểm dao động điều hòa với biên độ $4 \\ cm$. Quãng đường lớn nhất mà chất điểm đi được trong $2 \\ s$ là $12 \\ cm$. Tần số góc của dao động bằng bao nhiêu rad/s (làm tròn kết quả đến chữ số hàng phần trăm)?",
            "options": [],
            "correctOption": "2,09",
            "explanation": "\n\t\t2,09\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-2-ex-27",
            "question": "Một chất điểm dao động điều hoà có hệ thức liên hệ giữa vận tốc $v$ và gia tốc $a$ là $\\dfrac{v^2}{640}+\\dfrac{a^2}{2,56}=1$ (trong đó, $v$ tính bằng $cm/s$ và $a$ tính bằng $m/s^2$). Biên độ dao động của chất điểm bằng bao nhiêu $cm$?",
            "options": [],
            "correctOption": "40",
            "explanation": "\n\t\t$40 \\ cm$",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-2-ex-28",
            "question": "Con lắc lò xo treo thẳng đứng với đầu cố định của lò xo ở trên cao, quả nặng ở dưới thấp. Con lắc đang dao động điều hòa trên phương thẳng đứng, quanh vị trí cân bằng, với chu kì bằng $\\dfrac{1}{\\pi}\\ s$. Biết độ nén lớn nhất của lò xo trong quá trình dao động là $2,5\\ cm$. Cho gia tốc trọng trường $g = \\pi^2 = 10\\ m/s^2$. Tốc độ cực đại của vật trong lò xo trong quá trình dao động là bao nhiêu m/s?",
            "options": [],
            "correctOption": "1",
            "explanation": "\n\t\t\n\n\t\t\t-  Ta có: $\\omega = \\dfrac{2\\pi}{T} = \\dfrac{2\\pi}{\\dfrac{1}{\\pi}} = 20\\ rad/s$.\n\t\t\t-  Tại vị trí cân bằng, lò xo giãn một đoạn $\\Delta \\ell_0 = \\dfrac{g}{\\omega^2} = \\dfrac{10}{20^2} = 0,025\\ m = 2,5\\ cm$.\n\t\t\t-  Mà độ nén lớn nhất của lò xo trong quá trình dao động là 2,5 cm $\\Rightarrow A = 2,5 + 2,5 = 5\\ cm\\Rightarrow v_{\\max} = \\omega.A = 20.5 = 100\\ cm/s = 1\\ m/s$.\n\t\t\n\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          }
        ]
      },
      {
        "id": "on-tap-3",
        "title": "Ôn tập Chương I - Đề 3",
        "theory": "",
        "exercises": [
          {
            "id": "on-tap-3-ex-1",
            "question": "Một chất điểm dao động điều hòa với phương trình $x=A\\cos\\left(\\omega t+\\varphi\\right)$, trong đó $\\omega $ có giá trị dương. Đại lượng $\\omega$ gọi là",
            "options": [
              "biên độ dao động",
              "chu kì của dao động",
              "tần số góc của dao động",
              "pha ban đầu của dao động"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t$\\omega$ được gọi là tần số góc của dao động.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-2",
            "question": "Một chất điểm dao động điều hoà có phương trình li độ theo thời gian là $x=6\\cos(4\\pi t+\\dfrac{\\pi}{3})\\ (cm)$. Chu kì của dao động là",
            "options": [
              "$4\\ s$",
              "$2\\ s$",
              "$0,25\\ s$",
              "$0,5\\ s$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Chu kì của dao động bằng: $T=\\dfrac{2\\pi}{\\omega}=0,5\\ s$\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-3",
            "question": "Một vật dao động điều hòa trên trục Ox. Vận tốc của vật",
            "options": [
              "luôn có giá trị không đổi",
              "luôn có giá trị dương",
              "là hàm bậc hai của thời gian",
              "biến thiên điều hòa theo thời gian"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\tVận tốc của vật biến thiên điều hòa theo thời gian.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-4",
            "question": "Vật dao động điều hoà với biên độ $A = 5\\ cm$, tần số $f = 4\\ Hz$. Tốc độ vật khi có li độ $x = 3\\ cm$ là",
            "options": [
              "$\\left|v\\right| = 2\\pi\\ cm/s$",
              "$\\left|v\\right|= 16\\pi\\ cm/s$",
              "$\\left|v\\right|= 32\\pi\\ cm/s$",
              "$\\left|v\\right|= 64\\pi\\ cm/s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Ta có: $\\omega = 2\\pi f = 8\\pi\\ rad/s.$\n\t\t\t\t-  Biểu thức độc lập: $A^2 = x^2 + \\dfrac{v^2}{\\omega^2}\\Rightarrow |v| = \\omega\\sqrt{A^2-x^2} = 8\\pi\\sqrt{0,05^2-0,03^2} = 0,32\\pi\\ m/s = 32\\pi\\ cm/s$.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-5",
            "question": "Một vật nhỏ dao động điều hòa với biên độ A trên trục Ox. Khi pha của vận tốc là $0$ thì vật",
            "options": [
              "ở biên dương $x = A$",
              "đi qua vị trí cân bằng theo chiều âm",
              "đi qua vị trí cân bằng theo chiều dương",
              "ở biên âm $x = -A$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tTa có: $\\phi _x=\\phi _v-\\dfrac{\\pi}{2} = - \\dfrac{\\pi}{2} \\Rightarrow x = 0\\quad (+)$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-6",
            "question": "Một vật dao động điều hòa với chu kì $2\\ s$, biên độ $A$. Khoảng thời gian ngắn nhất vật đi từ vị trí $0,6A$ đến vị trí $-0,8A$ là",
            "options": [
              "$0,41\\ s$",
              "$0,59\\ s$",
              "$0,205\\ s$",
              "$0,5\\ s$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Sử dụng công thức học về khoảng thời gian vật dao động giữa vị trí cân bằng và li độ x không đặc biệt là:\n\t\t\t\t$\\dfrac{\\arcsin \\left( \\dfrac{\\left| x \\right|}{A} \\right)}{\\omega }=\\dfrac{T.\\arcsin \\left( \\dfrac{\\left| x \\right|}{A} \\right)}{2\\pi}$.\\\\\n\t\t\t\t$\\Rightarrow$ Thời gian cần tìm là :  $\\dfrac{T.\\arcsin \\left( 0,6 \\right)}{2\\pi}+\\dfrac{T.\\arcsin \\left( 0,8 \\right)}{2\\pi}=\\dfrac{T}{2\\pi}.\\dfrac{\\pi}{2}=\\dfrac{T}{4}$. \n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-7",
            "question": "Cho một chất điểm đang dao động điều hòa với chu kì bằng $2\\ s$ và biên độ bằng $6\\ cm$. Trong một chu kì dao động, tổng thời gian mà khoảng cách từ chất điểm tới vị trí cân bằng nhỏ hơn $3\\sqrt{3}\\ cm$ là",
            "options": [
              "$\\dfrac{4}{3}\\ s$",
              "$\\dfrac{2}{3}\\ s$",
              "$1\\ s$",
              "$\\dfrac{3}{4}\\ s$"
            ],
            "correctOption": 0,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\t-  \n\t\t\t\t\tTa có: $|x|< +3\\sqrt{3} \\Rightarrow -3\\sqrt{3}\\ cm< x< +3\\sqrt{3}\\ cm$.\n\t\t\t\t\t-  Ta biểu diễn các điểm có li độ $3\\sqrt{3}$ trên đường tròn lượng giác như hình vẽ.\n\t\t\t\t\t-  Trong một chu kì dao động, khoảng cách từ chất điểm tới vị trí cân bằng nhỏ hơn $3\\sqrt{3}$ khi nó đi từ vị trí $M_1$ đến $M_2$ và từ $M_3$ đến $M_0\\Rightarrow t = \\dfrac{T}{3}+\\dfrac{T}{3} = \\dfrac{2T}{3} = \\dfrac{4}{3}\\ s$.\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-3_1.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\t\t\t\t\t\\tkzDefPoints{-2.5/0/m, 2.5/0/n, 0/0/o, 0/2.5/p, 0/-2.5/q}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-150:2){0}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-30:2){1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](30:2){2}\n\t\t\t\t\t\\tkzDefShiftPoint[o](150:2){3}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](1) \\tkzGetPoint{h}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](0) \\tkzGetPoint{h'}\n\t\t\t\t\t\\draw(o)circle(2cm);\n\t\t\t\t\t\\tkzDrawSegments[dashed](0,3 1,2)\n\t\t\t\t\t\\tkzDrawSegments(p,q)\n\t\t\t\t\t\\tkzDrawSegments[->](m,n)\n\t\t\t\t\t\\tkzDrawSegments[blue,->](o,1 o,2 o,0 o,3)\n\t\t\t\t\t\\tkzDrawPoints[size=3](o,1,h,0,2,3,h')\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](2,o,3)\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](0,o,1)\n\t\t\t\t\t\\node at (0)[below left]{$M_3$};\n\t\t\t\t\t\\node at (1)[below right]{$M_0$};\n\t\t\t\t\t\\node at (2)[above right]{$M_1$};\n\t\t\t\t\t\\node at (3)[above left]{$M_2$};\n\t\t\t\t\t\\node at (2,0)[above right]{$6$};\n\t\t\t\t\t\\node at (h')[below]{$-3\\sqrt{3}$};\n\t\t\t\t\t\\node at (h)[below]{$3\\sqrt{3}$};\n\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-8",
            "question": "Cho một chất điểm dao động điều hòa với biên độ bằng $4\\ cm$, chu kì bằng $0,5\\ s$. Trong mỗi chu kì, khoảng thời gian mà tốc độ chuyển động của vật lớn hơn $8\\pi\\sqrt{2}\\ cm/s$ là",
            "options": [
              "$\\dfrac{3}{4}\\ s$",
              "$\\dfrac{1}{8}\\ s$",
              "$\\dfrac{1}{6}\\ s$",
              "$\\dfrac{1}{4}\\ s$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\t\n\n\t\t\t\t\t-  Ta có: $\\omega = \\dfrac{2\\pi}{0,5} = 4\\pi \\Rightarrow v_{\\max} = 4\\pi. 4 = 16\\pi\\ cm/s$.\n\t\t\t\t\t-  Theo đề: $|v|>8\\pi\\sqrt{2}\\ cm/s \\Rightarrow v>8\\pi\\sqrt{2}\\ cm/s$ hoặc $v< -8\\pi\\sqrt{2}\\ cm/s$.\n\t\t\t\t\t-  Trong 1 chu kì, vật chuyển động với tốc độ lớn hơn $8\\pi\\sqrt{2}$ khi nó đi từ điểm $M_0$ đến $M_1$ và từ điểm $M_3$ đến $M_4$ trên đường tròn lượng giác như hình vẽ\\\\\n\t\t\t\t\t\\\\\n\t\t\t\t\t$\\Rightarrow \\Delta \\varphi = \\dfrac{\\pi}{2}+\\dfrac{\\pi}{2} = \\pi\\Rightarrow t = \\dfrac{\\Delta \\varphi}{\\omega} = \\dfrac{1}{4}\\ s$.\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-3_2.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\t\t\t\t\t\\tkzDefPoints{-2.5/0/m, 2.5/0/n, 0/0/o, 0/2.5/p, 0/-2.5/q}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-135:2){1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](-45:2){2}\n\t\t\t\t\t\\tkzDefShiftPoint[o](45:2){3}\n\t\t\t\t\t\\tkzDefShiftPoint[o](135:2){4}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](2) \\tkzGetPoint{h}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](1) \\tkzGetPoint{h'}\n\t\t\t\t\t\\draw(o)circle(2cm);\n\t\t\t\t\t\\tkzDrawSegments[dashed](1,4 2,3)\n\t\t\t\t\t\\tkzDrawSegments(p,q)\n\t\t\t\t\t\\tkzDrawSegments[->](m,n)\n\t\t\t\t\t\\tkzDrawSegments[blue,->](o,1 o,2 o,4 o,3)\n\t\t\t\t\t\\tkzDrawPoints[size=3](o,1,h,4,2,3,h')\n\t\t\t\t\t\\tkzMarkAngles[size=0.7cm,arrows=->](4,o,1 2,o,3)\n\t\t\t\t\t\\node at (1)[below left]{$M_2$};\n\t\t\t\t\t\\node at (2)[below right]{$M_3$};\n\t\t\t\t\t\\node at (3)[above right]{$M_4$};\n\t\t\t\t\t\\node at (4)[above left]{$M_1$};\n\t\t\t\t\t\\node at (2.5,0)[below right]{$v$};\n\t\t\t\t\t\\node at (2,0)[above right]{$16\\pi$};\n\t\t\t\t\t\\node at (h')[below]{$-8\\pi\\sqrt{2}$};\n\t\t\t\t\t\\node at (h)[below]{$8\\pi\\sqrt{2}$};\n\t\t\\end{tikzpicture}__TIKZ_END__\n\n",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-9",
            "question": "Một vật nhỏ dao động điều hòa theo phương ngang với tần số góc $\\omega$. Tại thời điểm $t = 0$, vật nhỏ qua vị trí cân bằng theo chiều dương. Tại thời điểm $t = 1,475\\ s$, vận tốc $v$ và li độ $x$ của vật nhỏ thỏa mãn $v=\\omega \\left| x \\right|\\sqrt{3}$ lần thứ $10$. Tần số của vật xấp xỉ",
            "options": [
              "$3,1\\ Hz$",
              "$\\dfrac{10\\pi}{3}\\ Hz$",
              "$3,3\\ Hz$",
              "$20,7\\ Hz$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Khi $v=\\omega \\left| x \\right|\\sqrt{3}$ (v >0) $\\Rightarrow {{x }^2}+\\dfrac{v^2}{\\omega^2}=A^2\\to x=\\pm \\dfrac{A}{2}\\ (+)$.\n\t\t\t\t-  Thấy mỗi chu kì vật qua $x=\\pm \\dfrac{A}{2}(+)$ 2 lần, do đó, tách $10 = 8 + 2$.\n\t\t\t\t-  Vậy sau 4T vật qua $x=\\pm \\dfrac{A}{2}(+)$ 8 lần và quay lại trạng thái tại $t = 0$: $x = O(+)$, vật đi qua 2 lần nữa theo diễn biến trục thời gian bên dưới mất $\\dfrac{T}{4}+\\dfrac{T}{2}+\\dfrac{T}{6}$.\n\t\t\t\t\n\n\t\t\t\t\t\n__TIKZ_START__/images/tikz/tikz_on-tap-3_3.svg|\\begin{tikzpicture}\n\t\t\t\t\t\t\\tkzDefPoints{0/0/o, 5/0/a, 4.325/0/b, 3.525/0/c, 2.5/0/d,  -5/0/h, -4.325/0/g, -3.525/0/f, -2.5/0/e, -6/0/x', 6/0/x}\n\t\t\t\t\t\t\\tkzDefShiftPoint[a](-90:0.5cm){a1}\n\t\t\t\t\t\t\\tkzDefShiftPoint[a](-90:1cm){a2}\n\t\t\t\t\t\t\\tkzDefShiftPoint[o](-90:0.5cm){o1}\n\t\t\t\t\t\t\\tkzDefShiftPoint[h](-90:1cm){h2}\n\t\t\t\t\t\t\\tkzDefShiftPoint[h](-90:1.5cm){h3}\n\t\t\t\t\t\t\\tkzDefShiftPoint[e](-90:1.5cm){e3}\n\t\t\t\t\t\t\\tkzDrawSegments[blue,->,very thick](x',x)\n\t\t\t\t\t\t\\tkzDrawPoints[size=5,fill=black](o,a,b,c,d,e,f,g,h)\n\t\t\t\t\t\t\\tkzLabelPoint[above](o){\\tiny $O$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](a){\\tiny$A$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](b){\\tiny$\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](c){\\tiny$\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](d){\\tiny$\\dfrac{A}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](h){\\tiny$-A$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](g){\\tiny $-\\dfrac{A\\sqrt{3}}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](f){\\tiny$-\\dfrac{A\\sqrt{2}}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](e){\\tiny$-\\dfrac{A}{2}$}\n\t\t\t\t\t\t\\tkzLabelPoint[above](x){\\tiny$x$}\n\t\t\t\t\t\t\\tkzDrawSegments[->,very thick,red](o1,a1 a2,h2 h3,e3)\n\t\t\t\t\t\t\\tkzDrawSegments[very thick,red](a1,a2 h2,h3)\n\t\t\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t\t\t\n\n\t\t\t\t-  Thời điểm $t = 1,475\\ s = 4T +\\dfrac{T}{4}+\\dfrac{T}{2}+\\dfrac{T}{6} \\Leftrightarrow T = 0,3\\ s \\Rightarrow \\omega =\\dfrac{20\\pi}{3} \\Rightarrow f=\\dfrac{10}{3}\\ Hz$.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-10",
            "question": "Một chất điểm dao động điều hoà với tần số góc $\\omega=20\\ rad/s$ và biên độ $A = 6\\ cm$. Chọn gốc thời gian lúc vật đi qua vị trí cân bằng. Quãng đường vật đi được trong $0,05\\pi\\ s$ là",
            "options": [
              "$24\\ cm$",
              "$9\\ cm$",
              "$6\\ cm$",
              "$12\\ cm$"
            ],
            "correctOption": 3,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Trong $0,05\\pi = \\dfrac{T}{2}$ Vật đi được quãng đường $2A = 12\\ cm$ dù cho gốc thời gian là ở lúc nào.\n\t\t\t\t-  \n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-11",
            "question": "Một con lắc lò xo, vật nặng có khối lượng $m = 250\\ g$, lò xo có độ cứng $k = 100\\ N/m$. Tần số dao động của con lắc xấp xỉ",
            "options": [
              "$20\\ Hz$",
              "$3,18\\ Hz$",
              "$6,28\\ Hz$",
              "$5\\ Hz$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tTần số dao động của con lắc lò xo là: $f = \\dfrac{1}{{2\\pi}}\\sqrt{\\dfrac{k}{m}} = \\dfrac{1}{{2\\pi}}\\sqrt {\\dfrac{100}{0,25}} = 3,18\\ Hz$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-12",
            "question": "Sự phụ thuộc của li độ theo thời gian của một chất điểm dao động điều hòa được biểu diễn như hình vẽ. Tại điểm nào trong các điểm M, N, K, H có vectơ gia tốc và vectơ vận tốc ngược chiều nhau?",
            "options": [
              "Điểm M",
              "Điểm K",
              "Điểm N",
              "Điểm H"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tTừ đồ thị ta xét các vị trí:\n\t\t\t\n\n\t\t\t\t-  Tại M vật đang đi qua vị trí cân bằng theo chiều âm $\\Rightarrow$ gia tốc của vật có độ lớn $ = 0$.\n\t\t\t\t-  Tại N vật đang ở vị trí biên âm $\\Rightarrow$ vận tốc của vật có độ lớn $=0$.\n\t\t\t\t-  Tại K vật đang có li độ x và đang chuyển động từ vị trí cân bằng ra biên dương\\\\ $\\Rightarrow$ Tại K vectơ gia tốc hướng ngược chiều dương, vectơ vận tốc hướng cùng chiều dương\n\t\t\t\t-  Tại H vật đang có li độ x và đang chuyển động từ vị trí biên dương về vị trí cân bằng \\\\\n\t\t\t\t$\\Rightarrow$ Tại K vectơ gia tốc hướng ngược chiều dương, vectơ vận tốc hướng ngược chiều dương.\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-13",
            "question": "Một chất điểm dao động điều hòa có pha dao động của li độ quan hệ với thời gian được biểu diễn như hình vẽ. Quãng đường chất điểm đi được từ thời điểm $t_3$ đến thời điểm $t_4$ là $10\\ cm$ và $t_2 - t_1 = 0,5\\ s$. Gia tốc của chất điểm tại thời điểm $t = 2018\\ s$ **gần nhất** với giá trị nào sau đây?",
            "options": [
              "$17\\ cm/s^2$",
              "$22\\ cm/s^2$",
              "$20\\ cm/s^2$",
              "$14\\ cm/s^2$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Ta có $t_2 - t_1 = 0,5\\ s\\ \\Rightarrow$ trên Ot mỗi khoảng tương ứng 0,5 s.\n\t\t\t\t-  Khi $t = 0$ thì $(\\omega.0 + \\varphi) = - \\dfrac{2\\pi}{3} \\Rightarrow \\varphi = - \\dfrac{2\\pi}{3}$.\n\t\t\t\t-  Khi $t = t_2 = 1\\ s$ thì $(\\omega.1 + \\varphi) = 0 \\Rightarrow \\omega = \\dfrac{2\\pi}{3}\\ rad/s \\Rightarrow T = 3\\ s$.\n\t\t\t\n\n\t\t\t\n\n\t\t\t\t\t-  Phương trình dao động có dạng $x = A\\cos(\\dfrac{2\\pi}{3}t - \\dfrac{2\\pi}{3}) cm$\n\t\t\t\t\t-  Khi $t = t_3 = 2\\ s$ thì pha là $\\dfrac{2\\pi}{3}\\ rad$.\n\t\t\t\t\t-  Khi $t = t_4 = 3\\ s$ thì pha là $\\dfrac{4\\pi}{3}\\ rad \\Rightarrow$ góc quét $\\Delta\\varphi = \\dfrac{2\\pi}{3}\\ rad$ trên vòng tròn.\n\t\t\t\t\t-  Dễ dàng tính được $S = A = 10\\ cm$.\n\t\t\t\t\t$\\Rightarrow$ Phương trình dao động $x = 10\\cos(\\dfrac{2\\pi}{3}t - \\dfrac{2\\pi}{3}) cm$\n\t\t\t\t\t-  Gia tốc $a = - \\left(\\dfrac{2\\pi}{3}\\right)^2.10\\cos(\\dfrac{2\\pi}{3}t-\\dfrac{2\\pi}{3})\\ cm/s^2$. \n\t\t\t\t\t-  Khi $t = 2018 s$ thì $a = 21,9\\ cm/s^2$.\n\t\t\t\n\n__TIKZ_START__/images/tikz/tikz_on-tap-3_6.svg|\\begin{tikzpicture}[scale=1,thick,>=stealth']\n\t\t\t\t\t\t\t\t\t\t\\tkzDefPoints{-2.5/0/m, 2.5/0/n, 0/0/o, 0/2.5/p, 0/-2.5/q}\n\t\t\t\t\t\\tkzDefShiftPoint[o](240:2){2}\n\t\t\t\t\t\\tkzDefShiftPoint[o](120:2){1}\n\t\t\t\t\t\\tkzDefShiftPoint[o](90:2){0}\n\t\t\t\t\t\\tkzDefPointBy[projection=onto m--n](1) \\tkzGetPoint{h}\n\t\t\t\t\t\\draw(o)circle(2cm);\n\t\t\t\t\t\\tkzDrawSegments[dashed](1,2)\n\t\t\t\t\t\\tkzDrawSegments(p,q)\n\t\t\t\t\t\\tkzDrawSegments[->](m,n)\n\t\t\t\t\t\\tkzDrawSegments[blue,->](o,1 o,2)\n\t\t\t\t\t\\tkzDrawPoints[size=3](o,1,h,2)\n\t\t\t\t\t\\node at (1)[above left]{$t_3$};\n\t\t\t\t\t\\node at (2)[below left]{$t_4$};\n\t\t\t\t\t\\node at (2,0)[below right]{$A$};\n\t\t\t\t\t\\node at (h)[below left]{$-\\dfrac{A}{2}$};\n\t\t\t\t\\end{tikzpicture}__TIKZ_END__\n\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-14",
            "question": "Một con lắc lò xo gồm vật nhỏ và lò xo nhẹ có độ cứng k, đang dao động điều hòa theo phương nằm ngang. Mốc thế năng ở vị trí cân bằng. Khi vật qua vị trí có li độ x thì thế năng của con lắc có biểu thức nào sau đây?",
            "options": [
              "$W_t=\\dfrac{1}{2}kx^2$",
              "$W_t=kx$",
              "$W_t=\\dfrac{1}{2}kx$",
              "$W_t=kx^2$"
            ],
            "correctOption": 0,
            "explanation": "",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-15",
            "question": "Tại nơi có gia tốc trọng trường g, một con lắc đơn có sợi dây dài $\\ell $ đang dao động điều hoà. Tần số dao động của con lắc là",
            "options": [
              "$2\\pi \\sqrt{\\dfrac{\\ell}{g}}$",
              "$2\\pi \\sqrt{\\dfrac{g}{\\ell}}$",
              "$\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{g}{\\ell}}$",
              "$\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{\\ell}{g}}$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tTần số dao động của con lắc đơn là: $f=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{g}{\\ell}}$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-16",
            "question": "Một con lắc lò xo treo thẳng đứng, dao động điều hòa dọc theo quỹ đạo dài $6\\ cm$. Khi vật ở vị trí cao nhất, lò xo bị giãn $1\\ cm$. Lấy $g = 10\\ m/s^2,\\ \\pi^2 = 10$. Chu kì dao động của con lắc bằng",
            "options": [
              "$0,5\\ s$",
              "$0,6\\ s$",
              "$0,4\\ s$",
              "$0,3\\ s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\t\n\n\t\t\t\t-  Ở vị trí cao nhất (biên bên trên), lò xo bị giãn 1 cm\n\t\t\t\t-  Vật ở dưới vị trí lò xo tự nhiên 1 cm $\\Rightarrow \\Delta \\ell_0 = A + 1\\  cm = 4\\ cm \\Rightarrow T = 0,4\\ s$.\t\n\t\t\t\n\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-17",
            "question": "Một con lắc đơn gồm dây treo dài $\\ell$ và vật có khối lượng là $m$. Con lắc treo tại nơi có gia tốc rơi tự do là g. Kích thích con lắc dao động với biên độ góc $\\alpha _0$ rất nhỏ. Bỏ qua mọi ma sát và lực cản. Biểu thức năng lượng dao động của con lắc là",
            "options": [
              "$2mg\\ell\\alpha _0^2$",
              "$\\dfrac{1}{2}{mg\\ell}\\alpha _0^2$",
              "$mg\\ell\\alpha _0^2$",
              "$\\dfrac{2mg}{\\ell}\\alpha _0^2$"
            ],
            "correctOption": 1,
            "explanation": "\n\t\t\tCơ năng của con lắc được xác định bằng biểu thức: $W=\\dfrac{1}{2}{mg\\ell}\\alpha _0^2$.\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-18",
            "question": "Một con lắc đơn dao động điều hòa với biên độ góc $0,1\\ rad$ ở một nơi có gia tốc trọng trường $g = 10\\ m/s^2$. Vào thời điểm ban đầu vật đi qua vị trí có li độ dài $8\\ cm$ và có vận tốc $20\\sqrt{3}\\ cm/s$. Tốc độ cực đại của vật dao động là",
            "options": [
              "$0,8\\ m/s$",
              "$0,2\\ m/s$",
              "$0,4\\ m/s$",
              "$1\\ m/s$"
            ],
            "correctOption": 2,
            "explanation": "\n\t\t\tÁp dụng công thức độc lập thời gian, ta có:\n\t\t\t\n$$\n\\begin{aligned}\n\t\t\t\tS_0^2=s^2+\\dfrac{v^2}{\\omega ^2}\\Leftrightarrow &\\left(\\ell \\alpha_0\\right)^2=s^2+\\dfrac{\\ell.v^2}{g}\\\\\n\t\t\t\t\\Leftrightarrow &\\left(\\ell.0,1\\right)^2=0,08^2+\\dfrac{\\ell.0,04.3}{10}\\Rightarrow \\ell=1,6\\ m\n\t\t\t\t\\Rightarrow v_{\\max}=\\omega S_0=\\sqrt{\\dfrac{g}{\\ell}}.\\ell \\alpha_0=0,4\\ m/s.\n\t\t\t\\end{aligned}\n$$\n1\n\t\t",
            "qType": "multiple_choice",
            "type": "Phần I: Trắc nghiệm 1 lựa chọn"
          },
          {
            "id": "on-tap-3-ex-19",
            "question": "Một vật dao động điều hòa có phương trình $x=4 \\cos (4 \\pi t+\\dfrac{\\pi}{6})\\ cm$.",
            "options": [
              "Biên độ của vật là $4 \\ cm$",
              "Từ vị trí cân bằng ra biên thì vật chuyển động nhanh dần đều",
              "Thời điểm lần thứ $3$ khi vật qua vị trí có li độ $2 \\ cm$ theo chiều dương là $\\dfrac{9}{8} \\ s$",
              "Các thời điểm vật chuyển động qua vị trí có toạ độ $x=-2 \\ cm$ theo chiều dương $O x$ là $t=0,5+2 k\\ (s)\\ (k=1,2,3, \\ldots)$"
            ],
            "correctOption": [
              true,
              false,
              false,
              false
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-3-ex-20",
            "question": "Một vật đang dao động điều hòa theo phương trình $x=-5 \\cos 5 \\pi t\\ cm$.",
            "options": [
              "Pha ban đầu của li độ bằng $0\\ rad$",
              "Biên độ dao động là $5 \\ cm$",
              "Tần số dao động là $2,5 \\ Hz$",
              "Chu kì dao động là $0,4 \\ s$"
            ],
            "correctOption": [
              false,
              true,
              true,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-3-ex-21",
            "question": "Trong dao động điều hoà cơ năng luôn được bảo toàn và có sự chuyển hoá qua lại giữa động năng và thế năng.",
            "options": [
              "Cơ năng của vật dao động điều hoà bằng tổng động năng và thế năng ở thời điểm bất kì",
              "Cơ năng của vật dao động điều hoà biến thiên cùng tần số với động năng",
              "Cơ năng của vật dao động điều hoà tăng hai lần khi biên độ tăng hai lần",
              "Cơ năng của vật dao động điều hoà bằng động năng khi vật ở vị trí cân bằng"
            ],
            "correctOption": [
              true,
              false,
              false,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Đúng.\n\t\t\t-  Sai.\n\t\t\t-  Sai.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-3-ex-22",
            "question": "Một vật có khối lượng $m=100 \\ g$ được gắn vào lò xo có độ cứng $k=100 \\ N/m$. Kích thích cho con lắc dao động điều hòa theo phương ngang. Trong quá trình dao động thì chiều dài lớn nhất của lò xo là $5 \\ cm$.",
            "options": [
              "Khi vật đi đến biên thì vận tốc vật lớn nhất",
              "Tần số góc dao động là $5 \\ Hz$",
              "Thời gian ngắn nhất giữa hai lần tốc độ cực đại là một chu kì",
              "Độ lớn gia tốc cực đại trong quá trình dao động là $50 \\ m/s^2$"
            ],
            "correctOption": [
              false,
              false,
              false,
              true
            ],
            "explanation": "\n\t\t\n\n\t\t\t-  Sai. Khi vật đi đến biên thì vận tốc vật bằng không.\n\t\t\t-  Sai. Tần số góc dao động là $\\omega=\\sqrt{\\dfrac{k}{m}}=\\sqrt{\\dfrac{100}{0,1}}=10 \\sqrt{10} rad/s$.\n\t\t\t-  Sai. Thời gian ngắn nhất giữa hai lần tốc độ cực đại là $1 / 2$ chu kì.\n\t\t\t-  Đúng.\n\t\t\\end{- oice}\n\t",
            "qType": "true_false",
            "type": "Phần II: Câu hỏi Đúng/Sai"
          },
          {
            "id": "on-tap-3-ex-23",
            "question": "Một vật dao động điều hoà trên trục $O x$ có vận tốc cực đại bằng $20 \\ cm/s$ và gia tốc cực đại bằng $40\\ cm/s^2$. Tốc độ góc của vật là bao nhiêu rad/s?",
            "options": [],
            "correctOption": "2",
            "explanation": "\n\t\t$2\\ rad/s$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-3-ex-24",
            "question": "Một vật dao động điều hòa với phương trình $x=8 \\cos \\left(2 \\pi t-\\dfrac{\\pi}{6}\\right)\\ cm$. Thời điểm thứ $2015$ vật qua vị trí có vận tốc $-8 \\pi\\ cm/s$ là bao nhiêu phút (làm tròn kết quả đến chữ số hàng phần mười)?",
            "options": [],
            "correctOption": "16,8",
            "explanation": "\n\t\t16,8 phút\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-3-ex-25",
            "question": "Một vật nhỏ dao động điều hòa theo phương trình $x=A \\cos 3 \\pi t$ ($t$ tính bằng $s$). Thời điểm đầu tiên để gia tốc của vật có độ lớn bằng một nửa độ lớn gia tốc cực đại là bao nhiêu giây (làm tròn kết quả đến chữ số hàng phần trăm)?",
            "options": [],
            "correctOption": "0,11",
            "explanation": "\n\t\t0,11\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-3-ex-26",
            "question": "Động năng của một chất điểm dao động điều hoà được mô tả bởi phương trình sau: $W_{\\text{đ}}=0,8 \\sin ^2\\left(6 \\pi t+\\dfrac{\\pi}{6}\\right)\\ J$ (t tính bằng s). Thế năng của chất điểm tại thời điểm $t=1 \\ s$ là bao nhiêu jun?",
            "options": [],
            "correctOption": "0,6",
            "explanation": "\n\t\t0,6\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-3-ex-27",
            "question": "Một chất điểm dao động điều hoà có hệ thức liên hệ giữa li độ $x$ và vận tốc $v$ là $\\dfrac{x^2}{16}+\\dfrac{v^2}{640}=1$ (trong đó $x$ tính bằng $cm$, $v$ tính bằng $cm/s)$. Lấy $\\pi^2=10$. Chu kì dao động của chất điểm bằng bao nhiêu giây?",
            "options": [],
            "correctOption": "1",
            "explanation": "\n\t\t$1 \\ s$\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          },
          {
            "id": "on-tap-3-ex-28",
            "question": "Một con lắc lò xo treo thẳng đứng gồm lò xo có độ cứng $100\\ N/m$ và vật nhỏ có khối lượng $100\\ g$. Giữ vật theo phương thẳng đứng làm lò xo giãn $3\\ cm$ rồi truyền cho nó tốc độ $20\\pi \\sqrt{3}\\ cm/s$ theo phương thẳng đứng, sau đó vật dao động điều hòa. Lấy $g = 10\\ m/s^2,\\ \\pi^2=10$. Biên độ dao động của vật là bao nhiêu cm?",
            "options": [],
            "correctOption": "4",
            "explanation": "\n\t\t\n\n\t\t\t-  Ta có: $\\omega  = 10\\pi\\  rad/s$ và $\\Delta \\ell_0 = 1\\ cm$.\n\t\t\t-  Khi truyền tốc độ: lò xo đang giãn 3 cm $\\Rightarrow$ vật ở dưới vị trí lò xo tự nhiên 3 cm $\\Rightarrow$ vật đang cách vị trí cân bằng $\\left|x\\right| = \\left|\\Delta \\ell_0 - 3\\ cm\\right| = 2\\ cm$ và $\\left|v\\right| =20\\pi \\sqrt{3}\\ cm/s \\Rightarrow  A=\\sqrt{x^2+\\dfrac{v^2}{\\omega^2}}=  4\\ cm.$\t\n\t\t\n\n\t",
            "qType": "short_answer",
            "type": "Phần III: Trả lời ngắn"
          }
        ]
      }
    ]
  }
];
