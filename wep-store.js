

    
    let locations = ['pistol-list','shotgun-list','hunting-rifle-list','rifle-list','melee-list','ammo-list'];
    
    $.get('http://localhost:3000/data',function(data,status){
        
        let location = '';
        if (status == 'success') {
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
    });

    function sortItems(location,item){
        $('.'+location).append(`
        <div style="width: 240; height: auto; overflow: hidden;" class="p-4 rounded-3">
            <img src="./weapons/`+item['Name']+`.png" alt="`+item['Name']+`" style="object-fit: contain !important;" width="200px" max-height="100px">
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
    }
    


