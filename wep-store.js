

    
    let locations = ['pistol-list','shotgun-list','hunting-rifle-list','rifle-list','melee-list','ammo-list'];

    // let data = [{"Name":"S&W 657","Price":2200.0,"Category":1,"ID":1},{"Name":"Walther PPK","Price":2900.0,"Category":1,"ID":2},{"Name":"H&K P2000","Price":3300.0,"Category":1,"ID":3},{"Name":"H&K P7M8","Price":3100.0,"Category":1,"ID":4},{"Name":"Remington 870","Price":4800.0,"Category":2,"ID":5},{"Name":"Mossberg 590","Price":5250.0,"Category":2,"ID":6},{"Name":"L42A1","Price":6500.0,"Category":3,"ID":7},{"Name":"H&K 433","Price":12000.0,"Category":4,"ID":8}];
    // let jsonData = JSON.parse(data);
    // console.log(jsonData);
    
    // $.get('http://localhost:3000/data',
    // let data = [{"Name":"S&W 657","Price":2200.0,"Category":1,"ID":1},{"Name":"Walther PPK","Price":2900.0,"Category":1,"ID":2},{"Name":"H&K P2000","Price":3300.0,"Category":1,"ID":3},{"Name":"H&K P7M8","Price":3100.0,"Category":1,"ID":4},{"Name":"Remington 870","Price":4800.0,"Category":2,"ID":5},{"Name":"Mossberg 590","Price":5250.0,"Category":2,"ID":6},{"Name":"L42A1","Price":6500.0,"Category":3,"ID":7},{"Name":"H&K 433","Price":12000.0,"Category":4,"ID":8}];
    

    //let jsonString = `[{"Name":"Colt Python","Price":2400.0,"Category":1,"ID":1,"ItemID":57},{"Name":"Walther PPK","Price":2900.0,"Category":1,"ID":2,"ItemID":54},{"Name":"H&K P2000","Price":3300.0,"Category":1,"ID":3,"ItemID":47},{"Name":"H&K P7M8","Price":3100.0,"Category":1,"ID":4,"ItemID":48},{"Name":"Remington 870","Price":4800.0,"Category":2,"ID":5,"ItemID":90},{"Name":"Mossberg 590","Price":5250.0,"Category":2,"ID":6,"ItemID":81},{"Name":"L42A1","Price":6500.0,"Category":3,"ID":7,"ItemID":176},{"Name":"M4A1","Price":12000.0,"Category":4,"ID":8,"ItemID":124},{"Name":"Hunting Knife","Price":350.0,"Category":5,"ID":9,"ItemID":12},{"Name":".45 ACP","Price":80.0,"Category":6,"ID":10,"ItemID":501},{"Name":".357 MAG","Price":40.0,"Category":6,"ID":11,"ItemID":510},{"Name":"5.56x45mm","Price":235.0,"Category":6,"ID":12,"ItemID":506},{"Name":"9mm","Price":55.0,"Category":6,"ID":13,"ItemID":500},{"Name":"9x19mm","Price":80.0,"Category":6,"ID":14,"ItemID":504},{"Name":"12-G SLUG","Price":120.0,"Category":6,"ID":15,"ItemID":503}]`;
    //let parsedString = JSON.parse(jsonString);
    
    function getData(str){
        document.getElementById("m_div").innerHTML = '';
        document.getElementById("sg_div").innerHTML = '';
        document.getElementById("r_div").innerHTML = '';
        document.getElementById("h_div").innerHTML = '';
        document.getElementById("a_div").innerHTML = '';
        document.getElementById("p_div").innerHTML = '';

        var data = JSON.parse(str);
        let location = '';
        if (typeof(data) !== undefined) {
            data.forEach(element => {
                switch (element['Category']) {
                    case 1:
                        location = 'pistol-list';
                        sortItems(location,element);
                        break;
                    case 2:
                        location = 'shotgun-list';
                        sortItems(location,element);

                        break;
                    case 3:
                        location = 'hunting-rifle-list';
                        sortItems(location,element);

                        break;
                    case 4:
                        location = 'rifle-list';
                        sortItems(location,element);
    
                        break;
                    case 5:
                        location = 'melee-list';
                        sortItems(location,element);
    
                        break;
                    case 6:
                        location = 'ammo-list';
                        sortItems(location,element);
    
                        break;

                    default:
                        break;
                }
            });
            fillEmptys();
        }
    };

    //getData(parsedString);

    function sortItems(location,item){
        $('.'+location).append(`
        <div style="width: 240; height: auto; overflow: hidden;" class="p-4 rounded-3">
            <img src="./weapons/`+item['Name'].replaceAll(' ','_')+`.png" alt="`+item['Name']+`" style="object-fit: contain !important;" width="200px" max-height="100px">
            <h4 class="mt-2">`+item['Name']+`</h4>
            <div class="d-flex justify-content-start align-items-center">
                <span class="me-3" style='font-weight: 700'><b style='color: #198754'>$</b>`+item['Price']+`</span>
                <button href="#" class="btn btn-outline-success buyButton buy-`+item['Name']+`" onclick="buy('`+item['Name']+`','`+item['Price']+`')">Buy</button>
            </div>
        </div>
        `)
    };

    function fillEmptys() {
        locations.forEach(element => {
            if($('.'+element).children().length < 1){
                $('.'+element).append(`
                <div class="w-75 d-flex justify-content-evenly align-items-start">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="./weapons/empty.png" alt="" height="100px">
                    </div>
                    <div class="d-flex flex-column justify-content-start align-items-start">
                        <h1>There is nothing to show.</h1>
                        <small style="letter-spacing: 1px;">At this time we don't have this product , please come later.</small>
                    </div>
                </div>
                `)
            }
        });
    };


    // Aq gamoaqvs saxeli da ravi sad agzavni am requests rogor migaqvs Bridge ti back shi naxe shen :')
    function buy(item, price){
        console.log(item);
        console.log(price);
        mp.trigger('requestWeaponPurchase', item, price);
    }
    


