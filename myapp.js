//Quiz tentang pengetahuan Umum

var nama;
var score=0;
var question;
var answer;
var predikat;

function simpleQuiz(input){
  var arr = [];
  for(var i=0; i<input.length; i++){
    question=prompt(i+1+'. '+input[i][0]);
    answer=question.toLowerCase();
    if (answer===input[i][1]){
      score+=1;
      arr.push(i+1+'. '+answer+' : Benar');
    }else{
      arr.push(i+1+'. '+answer+ ' : Salah');
    }
  }
  if (score===10){
    predikat="PERFECT";
  }else{
    if( score>=7){
      predikat="GREAT";
    }else{
      predikat="BAD";
    }
  }
  return arr.join('\n');
}

var quiz=[['Monumen terkenal di kota Paris','eiffel'],
          ['Pusat peredaran tata surya','matahari'],
          ['Mata uang negara Jepang','yen'],
          ['Senjata yang dipakai Indonesia pada masa penjajahan','bambu runcing'],
          ['Udara yang bergerak','angin'],
          ['Pohon yang melambangkan hari natal','cemara'],
          ['Alat pernafasan belalang','trakea'],
          ['Gunung tertinggi di dunia','everest'],
          ['Burung yang menjadi lambang kantor pos Indonesia','walet'],
          ['Nama kapal pesiar yang tenggelam pada 15 Juni 1912','titanic']];

nama= prompt ('Selamat datang di asah pengetahuan umum, silakan isi nama anda ');
if (nama===''){
  nama='Stranger';
}
console.log(simpleQuiz(quiz));
console.log('\n')
console.log ('hai '+nama+' kamu berhasil menjawab '+ score+' dari 10 soal - '+ predikat);