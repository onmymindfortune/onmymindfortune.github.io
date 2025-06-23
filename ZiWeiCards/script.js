 // 圖片和對應文字的資料
 const contentMain = [ // … 總共 76 張
    { image: "天同.png", text: "天同-(正牌)"},
    { image: "天機.png", text: "天機-(正牌)"},
    { image: "天府.png", text: "天府-(正牌)"},
    { image: "天梁.png", text: "天梁-(正牌)"},
    { image: "天相.png", text: "天相-(正牌)"},
    { image: "太陰.png", text: "太陰-(正牌)"},
    { image: "廉貞.png", text: "廉貞-(正牌)"},
    { image: "巨門.png", text: "巨門-(正牌)"},
    { image: "武曲.png", text: "武曲-(正牌)"},
    { image: "太陽.png", text: "太陽-(正牌)"},
    { image: "天同天梁.png", text: "天同天梁-(正牌)"},
    { image: "破軍.png", text: "破軍-(正牌)"},
    { image: "紫微.png", text: "紫微-(正牌)"},
    { image: "貪狼.png", text: "貪狼-(正牌)"},
    { image: "天機巨門.png", text: "天機巨門-(正牌)"},
    { image: "天磯天梁.png", text: "天磯天梁-(正牌)"},
    { image: "天機太陰.png", text: "天機太陰-(正牌)"},
    { image: "太陰天同.png", text: "太陰天同-(正牌)"},
    { image: "巨門太陽.png", text: "巨門太陽-(正牌)"},
    { image: "巨門天同.png", text: "巨門天同-(正牌)"},
    { image: "太陽太陰.png", text: "太陽太陰-(正牌)"},
    { image: "廉貞七殺.png", text: "廉貞七殺-(正牌)"},
    { image: "太陽天梁.png", text: "太陽天梁-(正牌)"},
    { image: "廉貞貪狼.png", text: "廉貞貪狼-(正牌)"},
    { image: "廉貞天相.png", text: "廉貞天相-(正牌)"},
    { image: "廉貞天府.png", text: "廉貞天府-(正牌)"},
    { image: "武曲七殺.png", text: "武曲七殺-(正牌)"},
    { image: "廉貞破軍.png", text: "廉貞破軍-(正牌)"},
    { image: "武曲破軍.png", text: "武曲破軍-(正牌)"},
    { image: "武曲貪狼.png", text: "武曲貪狼-(正牌)"},
    { image: "武曲天相.png", text: "武曲天相-(正牌)"},
    { image: "武曲天府.png", text: "武曲天府-(正牌)"},
    { image: "紫微天相.png", text: "紫微天相-(正牌)"},
    { image: "紫微破軍.png", text: "紫微破軍-(正牌)"},
    { image: "紫微七殺.png", text: "紫微七殺-(正牌)"},
    { image: "紫微天府.png", text: "紫微天府-(正牌)"},
    { image: "紫微貪狼.png", text: "紫微貪狼-(正牌)"},
    { image: "天磯天梁倒.png", text: "天磯天梁-(倒牌)"},
    { image: "貪狼倒.png", text: "貪狼-(倒牌)"},
    { image: "天機倒.png", text: "天機-(倒牌)"},
    { image: "天同天梁倒.png", text: "天同天梁-(倒牌)"},
    { image: "巨門倒.png", text: "巨門-(倒牌)"},
    { image: "太陽倒.png", text: "太陽-(倒牌)"},
    { image: "太陰倒.png", text: "太陰-(倒牌)"},
    { image: "天機太陰倒.png", text: "天機太陰-(倒牌)"},
    { image: "紫微倒.png", text: "紫微-(倒牌)"},
    { image: "天梁倒.png", text: "天梁-(倒牌)"},
    { image: "廉貞倒.png", text: "廉貞-(倒牌)"},
    { image: "太陰天同倒.png", text: "太陰天同-(倒牌)"},
    { image: "破軍倒.png", text: "破軍-(倒牌)"},
    { image: "武曲倒.png", text: "武曲-(倒牌)"},
    { image: "天機巨門倒.png", text: "天機巨門-(倒牌)"},
    { image: "太陽天梁倒.png", text: "太陽天梁-(倒牌)"},
    { image: "天府倒.png", text: "天府-(倒牌)"},
    { image: "天相倒.png", text: "天相-(倒牌)"},
    { image: "廉貞貪狼倒.png", text: "廉貞貪狼-(倒牌)"},
    { image: "巨門太陽倒.png", text: "巨門太陽-(倒牌)"},
    { image: "廉貞天相倒.png", text: "廉貞天相-(倒牌)"},
    { image: "武曲七殺倒.png", text: "武曲七殺-(倒牌)"},
    { image: "廉貞破軍倒.png", text: "廉貞破軍-(倒牌)"},
    { image: "廉貞七殺倒.png", text: "廉貞七殺-(倒牌)"},
    { image: "巨門天同倒.png", text: "巨門天同-(倒牌)"},
    { image: "紫微貪狼倒.png", text: "紫微貪狼-(倒牌)"},
    { image: "武曲破軍倒.png", text: "武曲破軍-(倒牌)"},
    { image: "紫微七殺倒.png", text: "紫微七殺-(倒牌)"},
    { image: "武曲天相倒.png", text: "武曲天相-(倒牌)"},
    { image: "廉貞天府倒.png", text: "廉貞天府-(倒牌)"},
    { image: "紫微天府倒.png", text: "紫微天府-(倒牌)"},
    { image: "紫微破軍倒.png", text: "紫微破軍-(倒牌)"},
    { image: "太陽太陰倒.png", text: "太陽太陰-(倒牌)"},
    { image: "武曲天府倒.png", text: "武曲天府-(倒牌)"},
    { image: "武曲貪狼倒.png", text: "武曲貪狼-(倒牌)"},
    { image: "紫微天相倒.png", text: "紫微天相-(倒牌)"},
    { image: "天同倒.png", text: "天同-(倒牌)"},
    { image: "七殺倒.png", text: "七殺-(倒牌)"},        
    ];

    const contentSupport = [ // … 總共 38 張
    { image: "化科.png", text: "化科-(正牌)"},
    { image: "化權.png", text: "化權-(正牌)"},
    { image: "化忌.png", text: "化忌-(正牌)"},
    { image: "天刑.png", text: "天刑-(正牌)"},
    { image: "天鉞.png", text: "天鉞-(正牌)"},
    { image: "左輔.png", text: "左輔-(正牌)"},
    { image: "天魁.png", text: "天魁-(正牌)"},
    { image: "右弼.png", text: "右弼-(正牌)"},
    { image: "火星.png", text: "火星-(正牌)"},
    { image: "文曲.png", text: "文曲-(正牌)"},
    { image: "擎羊.png", text: "擎羊-(正牌)"},
    { image: "文昌.png", text: "文昌-(正牌)"},
    { image: "祿存.png", text: "祿存-(正牌)"},
    { image: "空劫.png", text: "空劫-(正牌)"},
    { image: "紅鸞天喜.png", text: "紅鸞天喜-(正牌)"},
    { image: "陀羅.png", text: "陀羅-(正牌)"},
    { image: "鈴星.png", text: "鈴星-(正牌)"},
    { image: "陰煞.png", text: "陰煞-(正牌)"},
    { image: "天魁倒.png", text: "天魁-(倒牌)"},
    { image: "化權倒.png", text: "化權-(倒牌)"},
    { image: "化祿倒.png", text: "化祿-(倒牌)"},
    { image: "文曲倒.png", text: "文曲-(倒牌)"},
    { image: "文昌倒.png", text: "文昌-(倒牌)"},
    { image: "右弼倒.png", text: "右弼-(倒牌)"},
    { image: "天鉞倒.png", text: "天鉞-(倒牌)"},
    { image: "天刑倒.png", text: "天刑-(倒牌)"},
    { image: "化忌倒.png", text: "化忌-(倒牌)"},
    { image: "火星倒.png", text: "火星-(倒牌)"},
    { image: "化科倒.png", text: "化科-(倒牌)"},
    { image: "左輔倒.png", text: "左輔-(倒牌)"},
    { image: "空劫倒.png", text: "空劫-(倒牌)"},
    { image: "祿存倒.png", text: "祿存-(倒牌)"},
    { image: "陰煞倒.png", text: "陰煞-(倒牌)"},
    { image: "陀羅倒.png", text: "陀羅-(倒牌)"},
    { image: "鈴星倒.png", text: "鈴星-(倒牌)"},
    { image: "擎羊倒.png", text: "擎羊-(倒牌)"},
    { image: "紅鸞天喜倒.png", text: "紅鸞天喜-(倒牌)"},        
    ];

    const contentLife = [ // … 總共 24 張
    { image: "12養.png", text: "12養-(正牌)"},
    { image: "11胎.png", text: "11胎-(正牌)"},
    { image: "2沐浴.png", text: "2沐浴-(正牌)"},
    { image: "10絕.png", text: "10絕-(正牌)"},
    { image: "4臨官.png", text: "4臨官-(正牌)"},
    { image: "5帝旺.png", text: "5帝旺-(正牌)"},
    { image: "6衰.png", text: "6衰-(正牌)"},
    { image: "7病.png", text: "7病-(正牌)"},
    { image: "3冠帶.png", text: "3冠帶-(正牌)"},
    { image: "8死.png", text: "8死-(正牌)"},
    { image: "9墓.png", text: "9墓-(正牌)"},
    { image: "2沐浴倒.png", text: "2沐浴-(倒牌)"},
    { image: "1長生倒.png", text: "1長生-(倒牌)"},
    { image: "8死倒.png", text: "8死-(倒牌)"},
    { image: "9墓倒.png", text: "9墓-(倒牌)"},
    { image: "6衰倒.png", text: "6衰-(倒牌)"},
    { image: "7病倒.png", text: "7病-(倒牌)"},
    { image: "4臨官倒.png", text: "4臨官-(倒牌)"},
    { image: "3冠帶倒.png", text: "3冠帶-(倒牌)"},
    { image: "5帝旺倒.png", text: "5帝旺-(倒牌)"},
    { image: "10絕倒.png", text: "10絕-(倒牌)"},
    { image: "12養倒.png", text: "12養-(倒牌)"},
    { image: "11胎倒.png", text: "11胎-(倒牌)"}
    ];

    // 定義各牌陣規格
    const spreads = {
        single:      { main:1, support:0, life:0, extra:0 },
        two:         { main:1, support:1, life:0, extra:0 },
        basicThree:  { main:1, support:1, life:1, extra:0 },
        opposition:  { main:2, support:2, life:1, extra:0 },
        threeFour:   { main:4, support:4, life:1, extra:0 },
        twelve:      { main:12, support:12, life:1, extra:1 },
    };






    // 洗牌函式（Fisher–Yates）
    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // 建立單張卡片
    function createCard(parent, folder, card) {
        const d = document.createElement("div");
        d.className = "card";
        const img = document.createElement("img");
        img.src = `images/${folder}/${card.image}`;
        
        // if (Math.random() < 0.5) img.classList.add("reversed");
        const p = document.createElement("p");
        p.textContent = card.text.replace('-', '\n');
        d.append(img, p);
        parent.append(d);
    }


    function showRandomContent() {
        const key = document.getElementById("spreadSelector").value;
        const cardCt = document.getElementById("cardContainer");
        const twelveCt = document.getElementById("twelveContainer");
        
        
        // 都先清空、隱藏
        cardCt.innerHTML = "";
        twelveCt.innerHTML = "";
        cardCt.style.display   = "none";
        twelveCt.style.display = "none";


        // 抽牌（跟之前一樣）
        const mainShuffled    = shuffle(contentMain);
        const supportShuffled = shuffle(contentSupport);
        const lifeShuffled    = shuffle(contentLife);

        
        // 各牌陣分流
        let container;
        if (key === "twelve") {
            container = twelveCt;
            twelveCt.style.display = "grid";
            twelveCt.className = key;  // 加上 twelve 的 class
        } else if ( key === "threeFour"){
            container = cardCt;
            cardCt.style.display = "grid";  // 或原本你想要的顯示方式
            cardCt.className = key;   

        }else {
            container = cardCt;
            cardCt.style.display = "flex";  // 或原本你想要的顯示方式
            cardCt.className = key;         // single/two/basicThree/…
        }

        if (key === "twelve") {
            // 十二宮位邏輯（跟你原先一模一樣）
            const mains = mainShuffled.slice(0,12);
            const sups  = supportShuffled.slice(0,12);
            const extra = mainShuffled[12];
            const life  = lifeShuffled[0];
            for (let i = 0; i < 12; i++) {
            const g = document.createElement("div");
            g.className = `group group-pos pos${i+1}`;
            createCard(g,"1Main", mains[i]);
            createCard(g,"2Support", sups[i]);
            container.append(g);
            }
            // 中央兩張
            const cm = document.createElement("div"); cm.className = "center-main";
            createCard(cm,"1Main", extra);
            const cl = document.createElement("div"); cl.className = "center-life";
            createCard(cl,"3Life", life);
            container.append(cm, cl);
        }
        else {
            if (key === "opposition") {
                // 對宮：主星2、輔星2、生1
                const mains = mainShuffled.slice(0,2);
                const sups  = supportShuffled.slice(0,2);
                const life  = lifeShuffled[0];

                const gm = document.createElement("div"); gm.className = "group-main";
                mains.forEach(c => createCard(gm, "1Main", c));

                const gs = document.createElement("div"); gs.className = "group-support";
                sups.forEach(c => createCard(gs, "2Support", c));

                const gl = document.createElement("div"); gl.className = "group-life";
                createCard(gl, "3Life", life);

                container.append(gm, gs, gl);
            }
            else if (key === "threeFour") {
                // 三方四正：4組(主+輔)、生1
                const mains = mainShuffled.slice(0,4);
                const sups  = supportShuffled.slice(0,4);
                const life  = lifeShuffled[0];
                ["top","right","bottom","left"].forEach((pos,i) => {
                const g = document.createElement("div");
                g.className = `group group-${pos}`;
                createCard(g,"1Main", mains[i]);
                createCard(g,"2Support", sups[i]);
                container.append(g);
                });
                const gl = document.createElement("div"); gl.className = "group-life";
                createCard(gl,"3Life", life);
                container.append(gl);
            }
        
            else if (key === "single") {
            // 只抽一張主星
            createCard(container, "1Main", mainShuffled[0]);
            }
            else if (key === "two") {
            // 主星＋輔星各一
            createCard(container, "1Main", mainShuffled[0]);
            createCard(container, "2Support", supportShuffled[0]);
            }
            else if (key === "basicThree") {
            // 主星＋輔星＋長生
            createCard(container, "1Main", mainShuffled[0]);
            createCard(container, "2Support", supportShuffled[0]);
            createCard(container, "3Life",   lifeShuffled[0]);
            }
        }
    }

    // 建立一張卡片的 helper
    function appendCard(parent, card) {
        const img = document.createElement("img");
        img.src = `images/${ card.cls==="life"? "3Life": card.cls==="support"? "2Support":"1Main"}/${card.image}`;
        if (Math.random()<0.5) img.classList.add("reversed");
        const p = document.createElement("p");
        p.textContent = card.text;
        parent.append(img, p);
    }

















    // function showRandomContent() {
    //     const selector = document.getElementById("spreadSelector");
    //     const key = selector.value;                    // e.g. "single", "two"…
    //     const container = document.getElementById("cardContainer");

    //     container.innerHTML = "";                      // 清空舊牌
    //     container.className = "";                      // 清掉所有舊 class
    //     container.classList.add(key);                  // 加上 new class


    //     const cfg = spreads[document.getElementById("spreadSelector").value];
    //     // const container = document.getElementById("cardContainer");
    //     // container.innerHTML = "";  // 清空舊牌

    //     // 1) 主星牌（含額外主星牌一起洗）
    //     const mainShuffled = shuffle(contentMain);
    //     const mainDraw = mainShuffled.slice(0, cfg.main);
    //     const extraDraw = mainShuffled.slice(cfg.main, cfg.main + cfg.extra);

    //     // 2) 輔星牌
    //     const supportDraw = shuffle(contentSupport).slice(0, cfg.support);

    //     // 3) 長生牌
    //     const lifeDraw = shuffle(contentLife).slice(0, cfg.life);

    //     // 組合所有要顯示的牌
    //     const allCards = [];
    //     mainDraw.forEach(c => allCards.push({ ...c, label: "主星" }));
    //     extraDraw.forEach(c => allCards.push({ ...c, label: "額外主星" }));
    //     supportDraw.forEach(c => allCards.push({ ...c, label: "輔星" }));
    //     lifeDraw   .forEach(c => allCards.push({ ...c, label: "長生" }));

    //     // 逐張建立 DOM
    //     allCards.forEach(card => {
    //         const div = document.createElement("div");
    //         div.className = "card";

    //         const img = document.createElement("img");
    //         img.src = `images/${card.label === "長生" ? "3Life" : card.label.includes("輔") ? "2Support" : "1Main"}/${card.image}`;
    //         // 隨機決定正逆位
    //         if (Math.random() < 0.5) img.classList.add("reversed");

    //         const p = document.createElement("p");
    //         p.textContent = `${card.label}：${card.text}`;

    //         div.appendChild(img);
    //         div.appendChild(p);
    //         container.appendChild(div);
    //     });
    // }



    // // 隨機顯示圖片和文字
    // function showRandomContent() {
    //     const randomIndex1 = Math.floor(Math.random() * 76 - 1);
    //     const randomIndex2 = Math.floor(Math.random() * 38 - 1);
    //     const randomIndex3 = Math.floor(Math.random() * 24 - 1);
    //     const selectedContentMain = contentMain[randomIndex1];
    //     const selectedContentSupport = contentSupport[randomIndex2];
    //     const selectedContentLife = contentLife[randomIndex3];

    //     // 顯示隨機圖片和文字
    //     document.getElementById("image1").src = `images/1Main/${selectedContentMain.image}`;
    //     document.getElementById("text1").textContent = selectedContentMain.text;
    //     document.getElementById("image2").src = `images/2Support/${selectedContentSupport.image}`;
    //     document.getElementById("text2").textContent = selectedContentSupport.text;
    //     document.getElementById("image3").src = `images/3Life/${selectedContentLife.image}`;
    //     document.getElementById("text3").textContent = selectedContentLife.text;
    //     console.log("main", selectedContentMain.image, "support", selectedContentSupport.image, "life", selectedContentLife.image);
    //     console.log("image1", document.getElementById("image1"));
    //     console.log("image2", document.getElementById("image2"));
    //     console.log("image3", document.getElementById("image3"));
    // }
