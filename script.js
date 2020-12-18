let judulGame = "Mbah Dukun RGB"
let introduction = "Mbah Dukun sedang mengobati pasiennya. Bantu dia meracik ramuan mujarab untuk permintaan 5 klien Mbah Dukun! Campurkan komposisi warna Red Green Blue untuk membuat ramuan yang diinginkan Mbah Dukun"
document.getElementById("red-value").innerHTML = 50
document.getElementById("green-value").innerHTML = 50
document.getElementById("blue-value").innerHTML = 50
var i = 0;
var j = 0;
var dialogEnd = false
var jMax = 2;
var level = 0;
var level0End = false
var level1End = false
var level2End = false
var level3End = false
var level4End = false


var nameSubmitted = false

function getUserName(){
    if(!nameSubmitted){
        username = document.getElementById("username-input").value
        eksekusi = 'Mbah Dukun: ' +username.toUpperCase() + '! Buatkan ramuan khusus DAAARK SAAALMOOON"'
        //console.log(username, eksekusi)
        var client1= 'Client1: "Malem mbah dukun . . . . . gebetan saya si Susi baru jadian sama cowo lain . . . . aku ingin dia miliku selamanya"'
        var mbahDukun = 'Mbah Dukun: "Mudah saja anak muda, serahkan semua padaku . . .    "'
        var eksekusi = 'Mbah Dukun: '+ '"'+ username.toUpperCase() + '! Buatkan ramuan khusus DAAARK SAAALMOOON" (R 230, G 150, B 120)'
        nameSubmitted = true
        return txt = [client1, mbahDukun, eksekusi]
        
    }
}


var win = false

document.getElementById("judul-game").innerHTML = judulGame
document.getElementById("introduction").innerHTML = introduction

function checkValue() {
    let redVal = document.getElementById("input-red").value;
    let blueVal = document.getElementById("input-blue").value;
    let greenVal = document.getElementById("input-green").value;
    document.getElementById("red-value").innerHTML = redVal
    document.getElementById("green-value").innerHTML = greenVal
    document.getElementById("blue-value").innerHTML = blueVal

    document.getElementById("red-value").style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`
    document.getElementById("green-value").style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`
    document.getElementById("blue-value").style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`
}



function startDialog(){
    console.log(level,win)
    switch(true){
        case level == 4 && win && !level3End:
            i=0
            j=0
            win = false
            client1= 'Pak Ustadz: "Syukurlah . . . . .sekarang waktunya kamu mandi besar"'
            mbahDukun = 'Mbah Dukun: "Oke pak ustad"'
            eksekusi = 'Mbah Dukun: '+ '"'+username.toUpperCase() + '! Buatkan ramuan WHITE untuk menyucikan diriku"'
            txt = [client1, mbahDukun, eksekusi]
            level3End = true
            break
        case level == 3 && win && !level2End:
            //console.log(i,j,level)
            i=0
            j=0
            win = false
            client1= 'Pak Ustadz: "Mbah Dukun......kembalilah ke jalan yang benar!!!"'
            mbahDukun = 'Mbah Dukun: "Mudah saja anak muda, . . . . . . EH . . . . .SIAPA KAMU?    "'
            eksekusi = 'Mbah Dukun: '+ '"'+username.toUpperCase() + '! Buatkan ramuan BLACK paling mematikan untuk orang ini"'
            txt = [client1, mbahDukun, eksekusi]
            level2End = true
            break
            
        case level == 2 && win && !level1End:
            //console.log(i,j,level)
            i=0
            j=0
            win = false
            client1= 'Client3: "Mbah Dukun......jadikan saya kayaarrrayaaa"'
            mbahDukun = 'Mbah Dukun: "Mudah saja anak muda, serahkan semua padaku . . .    "'
            eksekusi = 'Mbah Dukun: '+ '"'+username.toUpperCase() + '! Buatkan ramuan khusus DARK GOLDEN ROOD"'
            txt = [client1, mbahDukun, eksekusi]
            level1End = true
            break
            
        case level == 1 && win && !level0End:
            //console.log(i,j,level)
            i=0
            j=0
            win = false
            client1= 'Client2: "Mbah Dukun.....tolong saya....sudah 20 tahun nggak punya pacar......jadikan aku pria paling tampan"'
            mbahDukun = 'Mbah Dukun: "Mudah saja anak muda, serahkan semua padaku . . .    "'
            eksekusi = 'Mbah Dukun: '+ '"'+ username.toUpperCase() + '! Buatkan ramuan khusus CYAN"'

            txt = [client1, mbahDukun, eksekusi]
            level0End = true

            break


        
    }
   
    document.getElementById("username-input").style.display = "none"
    document.getElementById("username-label").style.display = "none"
    document.getElementById("next-button").innerHTML = 'Next >>'

    var speed = 50; /* The speed/duration of the effect in milliseconds */
    if (i < txt[j].length) {
        
        document.getElementById("dialog-box").innerHTML += txt[j].charAt(i);
        i++;
        //setTimeout(typeWriter, speed);
        setTimeout(startDialog, speed);
    }

    if(i == txt[j].length){
        dialogEnd = true
    }


}


function clearText(){
    if(dialogEnd && j != jMax){

    document.getElementById("dialog-box").innerHTML = ''
    i=0
    j++
    dialogEnd = false
    }else if(j == jMax && !win){
        document.getElementById("potions").hidden= false
        document.getElementById("range-input").hidden= false
        document.getElementById("value-input").hidden= false
    }else if(j == jMax && win){
        
            level++
            
            document.getElementById("dialog-box").innerHTML = ''
            //console.log(level)
        
    }
        
    
}
function reset(){
    window.location.reload();
}

function checkRGB(){
    //console.log(i, j, level)
    let redVal = document.getElementById("input-red").value;
    let blueVal = document.getElementById("input-blue").value;
    let greenVal = document.getElementById("input-green").value;

    if(level == 0){
        //console.log(redVal,blueVal,greenVal)
        if(redVal == 230 && blueVal == 120 && greenVal == 150){
            //console.log(redVal,blueVal,greenVal)
            i=0
            j=0
            //console.log(i,j)
            //console.log(true)
            client1= 'Client1: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "Ramuan kamu mujarab '+ username.toUpperCase() + '! Susi telah kawin lari dengan client kita...mantaap"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            win = true
            
            return startDialog()

        }else{
            i=0
            j=0
            client1= 'Client1: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "Ramuan kamu salah....bukannya Susi, suaminya yang jatuh cinta sama client kita. ' +username.toUpperCase() + '! Buatkan ramuan khusus DAAARK SAAALMOOON" (R 230, G 150, B 120)'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            return startDialog()
        }
    }else if( level == 1){
        if(redVal == 0 && blueVal == 250 && greenVal == 250){

            i=0
            j=0
            client1= 'Client2: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "Ramuan kamu mujarab '+ username.toUpperCase() + '! client kita tambah ganteng...mantaap"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            win = true
            return startDialog()

        }else{
            i=0
            j=0
            client1= 'Client2: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "'+ username.toUpperCase() + '! Ramuan kamu salah....bukannya tambah ganteng, client kita jadi tambah kaCYAN. Buatkan ramuan CYANN"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            return startDialog()
        }
        
    }else if( level == 2){
        if(redVal == 180 && blueVal == 10 && greenVal == 130){

            i=0
            j=0
            client1= 'Client3: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "Ramuan kamu mujarab '+ username.toUpperCase() + '! client kita jadi kaya raya...mantaap"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            win = true
            return startDialog()

        }else{
            i=0
            j=0
            client1= 'Client3: "Makasih mbah"'
            mbahDukun = 'Mbah Dukun: "sama-sama"'
            eksekusi = 'Mbah Dukun: "'+ username.toUpperCase() + '! Ramuan kamu salah...., client kita jatuh miskin. Buatkan ramuan DARK GOLDEN ROD"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            return startDialog()
        }

    }else if( level == 3){
        if(redVal == 0 && blueVal == 0 && greenVal == 0){

            i=0
            j=0
            client1= 'Pak Ustad: "Ini tidak mempan untukku, bertaubatlah!"'
            mbahDukun = 'Mbah Dukun: "aaaaa . . . . . ."'
            eksekusi = 'Mbah Dukun: "'+ username.toUpperCase() + ', orang ini benar, aku serasa menerima hidayah"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            win = true
            return startDialog()

        }else{
            i=0
            j=0
            client1= 'Pak Ustad: "Yang bener dong, udah mau tamat ini"'
            mbahDukun = 'Mbah Dukun: "semangat "' + username.toUpperCase() + 'kamu pasti bisa`!'
            eksekusi = 'Mbah Dukun: "'+ username.toUpperCase() + ' Buatkan ramuan BLACK paling mematikan untuk orang ini "'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            return startDialog()
        }

    }else if( level == 4){
        if(redVal == 250 && blueVal == 250 && greenVal == 250){

            i=0
            j=0
            client1= 'Pak Ustad: "Mohon maaf lahir batin ya"'
            mbahDukun = 'Mbah Dukun: "kembali dari nol ya"'
            eksekusi = 'TAMAT"'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            
            

        }else{
            i=0
            j=0
            client1= 'Pak Ustad: "Kamu mandi besar yang bener dong"'
            mbahDukun = 'Mbah Dukun: "Salah ya pak ustad, mohon maap . . . . .'
            eksekusi = 'Mbah Dukun: "'+ username.toUpperCase() + ' Buatkan ramuan WHITE untuk menyucikan diriku "'
            txt = [client1, mbahDukun, eksekusi]
            document.getElementById("dialog-box").innerHTML = ''
            document.getElementById("potions").hidden= true
            document.getElementById("range-input").hidden= true
            document.getElementById("value-input").hidden= true
            return startDialog()
        }
    }
         
    

}





