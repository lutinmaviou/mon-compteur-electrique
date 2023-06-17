import { useEffect } from 'react';

const TakeAPicture = () => {
  let video = null;
  let streaming = false;
  let canvas = null;
  let takePictureBtn = null;
  let btnContainer = document.querySelector('.btn-container');
  let photo = null;
  let width = (window.innerWidth * 60) / 100; //convert px to vw
  let output = null;
  let height = 0;

  const startup = () => {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    takePictureBtn = document.getElementById('takePictureBtn');
    btnContainer = document.querySelector('.btn-container');
    output = document.querySelector('.output');
    btnContainer.style.display = 'none';
    canvas.style.display = 'none';
    output.style.display = 'none';
    video.style.display = 'block';
    takePictureBtn.style.display = 'block';
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
    video.addEventListener(
      'canplay',
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox a un bug où la hauteur ne peut pas être lue
          // à partir de la vidéo. On prend des précautions.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute('width', width);
          video.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      },
      false
    );

    takePictureBtn.addEventListener(
      'click',
      (ev) => {
        takePicture();
        ev.preventDefault();
      },
      false
    );
    clearphoto();
  };

  const clearphoto = () => {
    const context = canvas.getContext('2d');
    context.fillStyle = '#AAA';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  };

  const takePicture = () => {
    const context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      console.log(context.width);
      const data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
      video.style.display = 'none';
      output.style.display = 'block';
      takePictureBtn.style.display = 'none';
      btnContainer.style.display = 'block';
    } else {
      clearphoto();
    }
  };

  useEffect(() => {
    window.addEventListener('load', startup, false);
  });
  return (
    <section className="picture flex-col">
      <video id="video">Le flux vidéo n'est pas disponible</video>
      <button id="takePictureBtn">Prendre la photo</button>
      <div className="btn-container">
        <button id="clearPictureBtn" onClick={startup}>
          Reprendre
        </button>
        <button id="keepPictureBtn">Valider</button>
      </div>
      <canvas id="canvas"></canvas>
      <div className="output">
        <img id="photo" alt="L'image capturée apparaîtra ici."></img>
      </div>
    </section>
  );
};

export default TakeAPicture;
