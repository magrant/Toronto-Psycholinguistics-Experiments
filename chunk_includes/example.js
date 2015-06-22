var audioPlayer=document.createElement('audio');
var audioSource=document.createElement('source');


    audioSource.src='test1.mp3';
    audioSource.type="audio/mp3";
    audioPlayer.appendChild(audioSource);

    audioPlayer.width=320;
    audioPlayer.className='text_audio';
    audioPlayer.id='audio_id';
    audioPlayer.style.margin=0;
    audioPlayer.controls='controls';
    $('body').append(audioPlayer);
