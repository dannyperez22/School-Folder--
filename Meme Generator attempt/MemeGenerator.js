// var memeGenerated = false;

function generateMeme() {
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    
    const memeImage = document.getElementById('memeImage');
    const topTextOutput = document.getElementById('topTextOutput');
    const bottomTextOutput = document.getElementById('bottomTextOutput');
    
    memeImage.src = 'https://giphy.com/';
    topTextOutput.innerText = topText;
    bottomTextOutput.innerText = bottomText;
  }
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove Meme';
  removeButton.addEventListener('click', function() {
    const memeContainer = document.getElementById('memeContainer');
    memeContainer.parentNode.removeChild(memeContainer);
  });
  
  const memeContainer = document.getElementById('memeContainer');
  memeContainer.appendChild(removeButton);

//   if (!memeGenerated) {
//     const removeButton = document.getElementById('removeButton');
//     removeButton.style.display = 'inline-block';
//     memeGenerated = true;
//   }

// function removeMeme() {
//   const memeContainer = document.getElementById('memeContainer');
//   memeContainer.innerHTML = '';
//   const removeButton = document.getElementById('removeButton');
//   removeButton.style.display = 'none';
//   memeGenerated = false;
// }