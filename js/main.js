'use strict'

// クイズの配列
const umiushi_quiz = [
   {
      question: './img/img_00.jpg',
      answers: ['ミズタマウミウシ', 'シラウミウシ', 'シロウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_01.jpg',
      answers: ['アオウミウシ', 'アオミノウミウシ', 'マオウミウシ'],
      correct: 0,
      color: 'blue',
   },
   {
      question: './img/img_02.jpg',
      answers: ['アミメウミウシ', 'コモンウミウシ', 'サラサウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_03.jpg',
      answers: ['キヌハダウミウシ', 'キイロウミウシ', 'キイロウミウミ'],
      correct: 1,
      color: 'yellow',
   },
   {
      question: './img/img_04.jpg',
      answers: ['マンリョウウミウシ', 'ミヤコウミウシ', 'ニシキウミウシ'],
      correct: 1,
      color: 'brown',
   },
   {
      question: './img/img_05.jpg',
      answers: ['ハナイロウミウシ', 'リュウモンウミウシ', 'コモンウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_06.jpg',
      answers: ['カンテンウミウシ', 'ミズタマウミウシ', 'ヒカリウミウシ'],
      correct: 1,
      color: 'other',
   },
   {
      question: './img/img_07.jpg',
      answers: ['ツノザヤウミウシ', 'ミズタマウミウシ', 'コソデウミウシ'],
      correct: 0,
      color: 'other',
   },
   {
      question: './img/img_08.jpg',
      answers: ['ミズタマウミウシ', 'ミヤコウミウシ', 'ヒカリウミウシ'],
      correct: 2,
      color: 'other',
   },
   {
      question: './img/img_09.jpg',
      answers: ['セトビロードウミウシ', 'キイロビロードウミウシ', 'ゴマフビロードウミウシ'],
      correct: 2,
      color: 'yellow',
   },
   {
      question: './img/img_10.jpg',
      answers: ['セトリュウグウウミウシ', 'ノトリュウグウウミウシ', 'シマリュウグウウミウシ'],
      correct: 0,
      color:'blue',
   },
   {
      question: './img/img_11.jpg',
      answers: ['フジイロウミウシ', 'シンデレラウミウシ', 'カグヤヒメウミウシ'],
      correct: 2,
      color: 'purple',
   },
   {
      question: './img/img_12.jpg',
      answers: ['ダイダイウミウシ', 'イソウミウシ', 'スポンジウミウシ'],
      correct: 1,
      color:'orange',
   },
   {
      question: './img/img_13.jpg',
      answers: ['ミツイラメリウミウシ', 'ヨツイラメリウミウシ', 'シラヒメウミウシ'],
      correct: 0,
      color:'white',
   },
   {
      question: './img/img_14.jpg',
      answers: ['ツブツブウミウシ', 'イガイガウミウシ', 'トゲトゲウミウシ'],
      correct: 2,
      color:'orange',
   },
   {
      question: './img/img_15.jpg',
      answers: ['キイロウミチョウ', 'キイロウミコチョウ', 'キイロユミコチョウ'],
      correct: 1,
      color: 'yellow',
   },
   {
      question: './img/img_16.jpg',
      answers: ['レンゲウミウシ', 'シラユキウミウシ', 'クリヤイロウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_17.jpg',
      answers: ['キヌハダウミウシ', 'ジボガウミウシ', 'キンセンウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_18.jpg',
      answers: ['サガミイロウミウシ', 'ミツイラメリウミウシ', 'コモンウミウシ'],
      correct: 0,
      color: 'white',
   },
   {
      question: './img/img_19.jpg',
      answers: ['コミドリリュウグウウミウシ', 'サガミリュウグウウミウシ', 'オオクチリュウグウウミウシ'],
      correct: 2,
      color: 'green',
   },
   {
      question: './img/img_20.jpg',
      answers: ['ミヤコウミウシ', 'アズキウミウシ', 'ニシキウミウシ'],
      correct: 1,
      color:'black',
   },
   {
      question: './img/img_21.jpg',
      answers: ['フタスジミノウミウシ', 'アカエラミノウミウシ', 'フジエラミノウミウシ'],
      correct: 0,
      color: 'black',
   },
   {
      question: './img/img_22.jpg',
      answers: ['ニシキツバメガイ', 'ヒョウモンツバメガイ', 'カラスキセワタ'],
      correct: 2,
      color: 'black',
   },
   {
      question: './img/img_23.jpg',
      answers: ['ヒメクロモウミウシ', 'ノトアマモウミウシ', 'ハナアマモウミウシ'],
      correct: 1,
      color: 'black',
   },
   {
      question: './img/img_24.jpg',
      answers: ['オトメウミウシ', 'ウスイロウミウシ', 'ジボガウミウシ'],
      correct: 2,
      color: 'white',
   },
   {
      question: './img/img_25.jpg',
      answers: ['ホウズキフシエラガイ', 'ウミフクロウ', 'ツユダマガイ'],
      correct: 2,
      color: 'orange',
   },
   {
      question: './img/img_26.jpg',
      answers: ['フジタウミウシ', 'ミズタマウミウシ', 'コソデウミウシ'],
      correct: 2,
      color: 'other',
   },
   {
      question: './img/img_27.jpg',
      answers: ['ツマグロモウミウシ', 'ツマグロミノウミウシ', 'ツルガチゴウミウシ'],
      correct: 1,
      color: 'red',
   },

];////////配列umiushi_quizここまで////////////////


/////////色選択ボタンを作成///////////////////////

//色の配列
const colors = [
   {
      color: '赤',
      color_val: 'red',
   },
   {
      color: '青',
      color_val: 'blue',
   },
   {
      color: '白',
      color_val: 'white',
   },
   {
      color: '黒',
      color_val: 'black',
   },
   {
      color: '黃',
      color_val: 'yellow',
   },
   {
      color: '緑',
      color_val: 'green',
   },
   {
      color: '茶色',
      color_val: 'brown',
   },
   {
      color: '紫',
      color_val: 'purple',
   },
   {
      color: 'オレンジ',
      color_val: 'orange',
   },
   
   {
      color: 'その他',
      color_val: 'other',
   },
];

//html作成のための配列
const select_color = [];
for( let i = 0; i < colors.length; i++) {
   select_color.push('<option value="'+ colors[i].color_val +'">'+ colors[i].color +'</option>')
};
//selectの初期表示を配列の先頭に追加
select_color.unshift('<option hidden>選択してください</option>');
//selectタグにhtmlを渡す
$('#color_select').html(select_color);


//ギャラリーボタンを消しておく
$('#gallery_btn').hide();
//色選択を消しておく
$('#color_select').hide();
//文字検索を消しておく
$('#name_in').hide();
//クリアボタンを消しておく
$('#imgclear_btn').hide();

/////////////////////クイズの動き///////////////////////


//結果判定を入れていく配列
let result = [];

//第何問目かを表示
$('#quiz_number').text(`Question${result.length +1}`);
//問題の見出しを表示
$('#quiz_h2').text('このウミウシの名前は？');

//問題の写真を表示
$('#question').html('<img src="' + umiushi_quiz[0].question + '">');


//回答ボタン部分
$('#answer_0').text(`${umiushi_quiz[0].answers[0]}`);
$('#answer_1').text(`${umiushi_quiz[0].answers[1]}`);
$('#answer_2').text(`${umiushi_quiz[0].answers[2]}`);

//キーを判別するためにvalueを割り当てる
$('#answer_0').val(0); //valは文字列
$('#answer_1').val(1); //valは文字列
$('#answer_2').val(2); //valは文字列

//resultボタンクローズ
$('#close_true').on('click', function () {
   $('#result_true').addClass('delete');
});
   
$('#close_false').on('click', function () {
   $('#result_false').addClass('delete');
});
   
//結果判定
$('button').on('click', function (e) {  //クリックイベントの値を取る
   //console.log(e.target.value); //押したボタンのバリューをコンソールに表示
   if (Number(e.target.value) === umiushi_quiz[result.length].correct) { //valueを数値化
      $("#result_true").removeClass('delete');//一致していれば正解を表示
      result.push('ok'); //配列resultに結果を追加
      console.log('ok');
   } else {   
      $("#result_false").removeClass('delete');//一致していればはずれを表示
      result.push('ng');//配列resultに結果を追加
      console.log('ng');
   }
      //配列resultとquiz.lengthの数が一致したら
      //if (result.length === umiushi_quiz.length) {
      if (result.length === 2) {
      
      $('#quiz_number').hide();//ヘッダーを消す
      $('#quiz_h2').text('終了！！！');//終了〜！
      $('#answer_list').hide();//imgを消す
      $('#question').hide();//ulを消す
      
      
      //結果が'ok'のものだけを配列win_countsに入れる
      const win_counts = (result.filter((x) => {
         return x === 'ok';
      })
      );
      //結果にokの数を表示
      $('#result').text(`SCORE${win_counts.length}/${umiushi_quiz.length}`);
      
      //ギャラリーボタンを出す
      $('#gallery_btn').show();
      
      
   } else { //まだ問題が残っているとき

      //第何問目かを更新
         $('#quiz_number').text(`Question.${result.length + 1}`);
      //問題の写真を更新
      $('#question').html('<img src="' + umiushi_quiz[result.length].question + '">');
   
      //回答ボタン部分を更新
      $('#answer_0').text(`${umiushi_quiz[result.length].answers[0]}`);
      $('#answer_1').text(`${umiushi_quiz[result.length].answers[1]}`);
      $('#answer_2').text(`${umiushi_quiz[result.length].answers[2]}`);
      
   }

});


////////////////////////////図鑑の動き//////////////////

//ギャラリーボタンが押されたら
$('#gallery_btn').on('click', function () {
   $('.wrapper').css('background', '#404040'); //背景色を変更
   $('.wrapper').css('color', '#fff'); //文字を白にする
   $('#quiz_h2').hide();//終了を消す
   $('#result').hide();//SCOREを消す
   $('.wrapper').css('height','1600px');

   //色選択を表示
   $('#color_select').show();
   //文字検索を表示
   $('#name_in').show();
   //クリアボタンを表示
   $('#imgclear_btn').show();
   
   const images = [];//画像表示用の配列を用意

   //umiushi_quizのimgをhtmlにして配列に入れる
   for (let i = 0; i < umiushi_quiz.length; i++) {
      images.push('<img src="' + umiushi_quiz[i].question + '" class="umiushi_img">');
   }
   //imgだけ入った配列を・・・ 
   $('#gallery_img').html(images).hide(); //htmlに入れて一度隠す
   $('#gallery_img').fadeIn(1500); //表示

});

//ウミウシの画像がクリックされたら
$('body').on('click', '.umiushi_img', function () {
   let indexNumber = $(this).index()
   let i = umiushi_quiz[indexNumber].correct;
   console.log(umiushi_quiz[indexNumber].answers[i]);
   $('#info_name').removeClass('delete');
   $('#name').text(`${umiushi_quiz[indexNumber].answers[i]}`);
});

$('body').on('click', '#info_name', function () {
   $('#info_name').addClass('delete');
});

///////色が選択されたら/////////////

$('body').change('#color_seek', function () {
   
   //選択された値を取得
   let sel_color = $('select').val();
   //値と同じものを配列に入れる
   const selected = umiushi_quiz.filter((x) => {
      return x.color === sel_color;
   });
   console.log(selected);

   const images = [];//画像表示用の配列を用意

   //selectedのimgをhtmlにして配列に入れる
   for (let i = 0; i < selected.length; i++) {
      images.push('<img src="' + selected[i].question + '" class="umiushi_img">');
   }

   $('#gallery_img').html(images).hide(); //htmlに入れて一度隠す
   $('#gallery_img').fadeIn(1500); //表示

   
});///////色が選択されたら、ここまで


//////////名前検索/////////////////

//ひらがなをカタカナに変換
function hiraToKana(str) {
   return str.replace(/[\u3041-\u3096]/g, function (match) {
      var chr = match.charCodeAt(0) + 0x60;
      return String.fromCharCode(chr);
   });
}

$('#name_in').keyup(function () { //キーが上がったら
   let in_txt = $('#name_in').val(); //入力されたものを変数へ代入
   let str = hiraToKana(in_txt); //カタカナに変換

   console.log(str);//入力されたもののカタカナ

   const selected = umiushi_quiz.filter((x) => {
      let i = x.correct; //正解の名前を見つける
      let true_name = x.answers[i];  //正解の名前を変数に代入
      if (true_name.includes(str)) {
         return x;
      }
   });

   console.log(selected);//一致する文字列がある変数

   const images = [];//画像表示用の配列を用意

   //selectedのimgをhtmlにして配列に入れる
   for (let i = 0; i < selected.length; i++) {
      images.push('<img src="' + selected[i].question + '" class="umiushi_img">');
   }

   $('#gallery_img').html(images).hide(); //htmlに入れて一度隠す
   $('#gallery_img').fadeIn(1500); //表示

});



