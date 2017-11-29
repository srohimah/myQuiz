# myQuiz
Quiz tentang pengetahuan umum dengan Javascript

```
SIMPAN 'nama'
SIMPAN 'score' sama dengan 0
SIMPAN 'question'
SIMPAN 'answer'
SIMPAN 'predikat'

SIMPAN FUNCTION 'simpleQuiz' yang menerima parameter 'input'
	SIMPAN array 'arr' kosong
	FOR setiap pertambahan 1 pada `i` dari 0 sampai panjang parameter 'input'
		SIMPAN 'question' dalam PROMPT 'input' array baris ke 'i' kolom ke 0
		SIMPAN 'answer' adalah 'question' dalam bentuk huruf kecil
	    IF `answer` sama dengan 'input' array baris ke 'i' kolom ke 1
	        TAMBAHKAN `score` dengan 1
		PUSH 'arr''answer'adalah "benar"
	    ELSE 
	        PUSH 'arr''answer'adalah "salah"
	    ENDIF
	ENDFOR

IF 'score' sama dengan 10:
	'predikat' sama dengan "PERFECT"
ELSE
	IF 'score' lebih besar sama dengan 7
		'predikat' sama dengan "GREAT"
	ELSE
		'predikat' sama dengan "BAD"
	ENDIF
ENDIF

RETURN 'arr'

SIMPAN array 'quiz' sama dengan daftar pertanyaan dan jawaban 
TAMPILKAN 'nama' dalam PROMPT menampilkan "Selamat datang di asah pengetahuan umum, silakan isi nama anda"
IF 'nama' sama dengan string kosong
	SIMPAN 'nama' sama dengan "Stranger"
TAMPILKAN "hai 'nama' kamu berhasil menjawab 'score' dari 10 pertanyaan" dengan 'predikat'

```
