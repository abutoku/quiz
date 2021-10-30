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


//結果判定

$('button').on('click', function (e) {  //クリックイベントの値を取る
   console.log(e.target.value); //押したボタンのバリューをコンソールに表示
   if (Number(e.target.value) === umiushi_quiz[result.length].correct) { //valueを数値化
      $("#result").text("正解！！！"); //一致していれば正解と表示
      result.push('ok'); //配列resultに結果を追加
   } else {
      $('#result').text('不正解！！！');//一致していなければ不正解と表示
      result.push('ng');//配列resultに結果を追加
   }
      //配列resultとquiz.lengthの数が一致したら
   if (result.length === umiushi_quiz.length) {
      
      $('#quiz_number').text('');//ヘッダーを消す
      $('#quiz_h2').text('終了！！！');//終了〜！
      $('#answer_list').hide();//imgを消す
      $('#question').hide();//ulを消す
      
      const win_counts = []; //正解数カウントのための配列
      //結果が'ok'のものだけを配列に入れる
      win_counts.push(result.filter((x) => {
         x === 'ok';
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
      console.log(umiushi_quiz[result.length].answers[1])
      
   }

});


