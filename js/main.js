'use strict'

const umiushi_quiz = [
   {
    question: './img/img_00.jpg',
    answers: ['ミズタマウミウシ', 'シラウミウシ', 'シロウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_01.jpg',
    answers: ['アオウミウシ', 'アオミノウミウシ', 'マオウミウシ'],
    correct: 0,
   },
   {
    question: './img/img_02.jpg',
    answers: ['アミメウミウシ', 'コモンウミウシ', 'サラサウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_03.jpg',
    answers: ['キヌハダウミウシ', 'キイロウミウシ', 'キイロウミウミ'],
    correct: 1,
   },
   {
    question: './img/img_04.jpg',
    answers: ['マンリョウウミウシ', 'ミヤコウミウシ', 'ニシキウミウシ'],
    correct: 1,
   },
   {
      question: './img/img_05.jpg',
    answers: ['ハナイロウミウシ', 'リュウモンウミウシ', 'コモンウミウシ'],
    correct: 2,
   },
   {
      question: './img/img_06.jpg',
    answers: ['カンテンウミウシ', 'ミズタマウミウシ', 'ヒカリウミウシ'],
    correct: 1,
   },
   {
      question: './img/img_07.jpg',
      answers: ['ツノザヤウミウシ', 'ミズタマウミウシ', 'コソデウミウシ'],
    correct: 0,
   },
   {
      question: './img/img_08.jpg',
    answers: ['ミズタマウミウシ', 'ミヤコウミウシ', 'ヒカリウミウシ'],
    correct: 2,
   },
   {
      question: './img/img_09.jpg',
    answers: ['セトビロードウミウシ', 'キイロビロードウミウシ', 'ゴマフビロードウミウシ'],
    correct: 2,
   },
   {
      question: './img/img_10.jpg',
    answers: ['セトリュウグウウミウシ', 'ノトリュウグウウミウシ', 'シマリュウグウウミウシ'],
    correct: 0,
   },
   {
      question: './img/img_11.jpg',
    answers: ['フジイロウミウシ', 'シンデレラウミウシ', 'カグヤヒメウミウシ'],
    correct: 2,
   },
   {
      question: './img/img_12.jpg',
    answers: ['ダイダイウミウシ', 'イソウミウシ', 'スポンジウミウシ'],
    correct: 1,
   },
   {
      question: './img/img_13.jpg',
    answers: ['ミツイラメリウミウシ', 'ヨツイラメリウミウシ', 'シラヒメウミウシ'],
    correct: 0,
   },
   {
      question: './img/img_14.jpg',
    answers: ['ツブツブウミウシ', 'イガイガウミウシ', 'トゲトゲウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_15.jpg',
    answers: ['キイロウミチョウ', 'キイロウミコチョウ', 'キイロユミコチョウ'],
    correct: 1,
   },
   {
    question: './img/img_16.jpg',
    answers: ['レンゲウミウシ', 'シラユキウミウシ', 'クリヤイロウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_17.jpg',
    answers: ['キヌハダウミウシ', 'ジボガウミウシ', 'キンセンウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_18.jpg',
    answers: ['サガミイロウミウシ', 'ミツイラメリウミウシ', 'コモンウミウシ'],
    correct: 0,
   },
   {
    question: './img/img_19.jpg',
    answers: ['コミドリリュウグウウミウシ', 'サガミリュウグウウミウシ', 'オオクチリュウグウウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_20.jpg',
    answers: ['ミヤコウミウシ', 'アズキウミウシ', 'ニシキウミウシ'],
    correct: 1,
   },
   {
    question: './img/img_21.jpg',
    answers: ['フタスジミノウミウシ', 'アカエラミノウミウシ', 'フジエラミノウミウシ'],
    correct: 0,
   },
   {
    question: './img/img_22.jpg',
    answers: ['ニシキツバメガイ', 'ヒョウモンツバメガイ', 'カラスキセワタ'],
    correct: 2,
   },
   {
    question: './img/img_23.jpg',
    answers: ['ヒメクロモウミウシ', 'ノトアマモウミウシ', 'ハナアマモウミウシ'],
    correct: 1,
   },
   {
    question: './img/img_24.jpg',
    answers: ['オトメウミウシ', 'ウスイロウミウシ', 'ジボガウミウシ'],
    correct: 2,
   },
   {
    question: './img/img_25.jpg',
    answers: ['ホウズキフシエラガイ', 'ウミフクロウ', 'ツユダマガイ'],
      correct: 2,
   },
   {
    question: './img/img_26.jpg',
    answers: ['フジタウミウシ', 'ミズタマウミウシ', 'コソデウミウシ'],
   correct: 2,
   },
   {
    question: './img/img_27.jpg',
    answers: ['ツマグロモウミウシ', 'ツマグロミノウミウシ', 'ツルガチゴウミウシ'],
    correct: 1,
   },

];////////配列umiushi_quizここまで////////////////

//結果判定を入れていく配列
let result = [];

//第何問目かを表示
$('#quiz_number').text(`第${result.length +1}問`);
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
   if (result.length === umiushi_quiz.length) {
      
      $('#quiz_number').text('');//ヘッダーを消す
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
      
   } else {

      //第何問目かを更新
      $('#quiz_number').text(`第${result.length + 1}問`);
      //問題の写真を更新
      $('#question').html('<img src="' + umiushi_quiz[result.length].question + '">');
   
      //回答ボタン部分を更新
      $('#answer_0').text(`${umiushi_quiz[result.length].answers[0]}`);
      $('#answer_1').text(`${umiushi_quiz[result.length].answers[1]}`);
      $('#answer_2').text(`${umiushi_quiz[result.length].answers[2]}`);
      
   }

});


