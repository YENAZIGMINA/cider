let hCont = $('.history_slide');
let hBtn = $('.history_btn li');
let hIndex;

hCont.slick({});

// 버튼을 클릭하면 해당 index를 찾아서 가기
hBtn.click(function (e) {
    e.preventDefault();
    let target = $(this); //클릭한 그것
    let index = target.index(); //클릭한 그것의 index번호
    //console.log(index)

    if (index == 0) {
        hIndex = 0
    } else if (index == 1) {
        hIndex = 4
    } else if (index == 2) {
        hIndex = 8
    } else if (index == 3) {
        hIndex = 12
    } else if (index == 4) {
        hIndex = 16
    }
    console.log(hIndex)
    hCont.slick('slickGoTo', hIndex);

    hBtn.removeClass('active')
    target.addClass('active')
})

hCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
    if (nextSlide >= 0 && nextSlide <= 3) {
        hBtn.removeClass('active')
        hBtn.eq(0).addClass('active')
    } else if (nextSlide >= 4 && nextSlide <= 7) {
        hBtn.removeClass('active')
        hBtn.eq(1).addClass('active')
    } else if (nextSlide >= 8 && nextSlide <= 11) {
        hBtn.removeClass('active')
        hBtn.eq(2).addClass('active')
    } else if (nextSlide >= 12 && nextSlide <= 15) {
        hBtn.removeClass('active')
        hBtn.eq(3).addClass('active')
    } else if (nextSlide >= 16 && nextSlide <= 19) {
        hBtn.removeClass('active')
        hBtn.eq(4).addClass('active')
    }

    $('.history_page em').text(nextSlide + 1)
});

//   history_poster
let posterBtn = $('.poster_btn ul li');
let posterCont = $('.poster_cont .poster');

//posterCont를 모두 안보이게 첫번째는 보이기
posterCont.hide().eq(0).show();

posterBtn.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    //console.log(index)
    posterCont.hide().eq(index).fadeIn();
    posterCont.find('figure').removeClass('move')
    posterCont.eq(index).find('figure').addClass('move')

    posterBtn.removeClass('active')
    target.addClass('active')
})


// history_cider
$('.cider_bottle').slick({
    dots: true,
    centerMode: true,
    centerPadding: "380px"
});


//memory-slide
let mCount = $('.memory-slider');
let mBtn = $('.memory_btn li');
let mbg = $('.history-slider-bg');
let mIndex;

mCount.slick({
    fade: true,
    autoplay:true,
});

mBtn.click(function (e) {
    e.preventDefault();

    let target = $(this);
    let index = target.index();
    //console.log(index)

    if (index == 0) {
        mIndex = 0;
    } else if (index == 1) {
        mIndex = 4;
    } else if (index == 2) {
        mIndex = 8;
    } else if (index == 3) {
        mIndex = 12;
    } else if (index == 4) {
        mIndex = 16;
    } else if (index == 5) {
        mIndex = 20;
    }

    //버튼누르면 해당 화면으로 가도록 태그작성
    mCount.slick('slickGoTo', mIndex); //매서드 명령값 가져오고, 적용할 변수 뒤에작성


})

//슬라이드 숫자 연결하기 (깃헙 events 가장 아래 복붙)
mCount.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide); //nextSlide - 다음화면으로~!
    if (nextSlide >= 0 && nextSlide <= 3){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-01")
    }else if(nextSlide >= 4 && nextSlide <= 7){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-02")
    }else if(nextSlide >=8 && nextSlide <= 11){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-03")
    }else if(nextSlide >=12 && nextSlide <= 15){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-04")
    }else if(nextSlide >=16 && nextSlide <= 19){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-05")
    }

    $('.memory_page_btn em').text(nextSlide + 1)
    //기본 첫 숫자는 0이므로 1로 나타나게 하기위해 +1

    mCount.slick('slickPlay'); //Methods 맨마지막 복붙 //버튼누르면 정지하는 오토플레이 막기위해서 작성
});