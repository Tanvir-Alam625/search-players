// search player api data load function 
const searchPlayers = async ()=>{
    const input = document.getElementById('input-values');
    const emptyV = input.value
    if(emptyV == ""){
        input.style.border = '2px solid red';
    }else{
    input.style.border = '2px solid gray'
    document.getElementById('loader-container').style.display = 'block';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${input.value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.player);
    getLoadPlayer(data.player);
    input.value= "";
    }
}
// search player function 
const getLoadPlayer = (players) =>{
    document.getElementById('loader-container').style.display = 'none';
    const container = document.getElementById('result-player');
    const playerError = document.getElementById('player-error');
    try{
        playerError.innerText = "";
        container.innerHTML = "";
        players.forEach(player => {
            const div = document.createElement('div');
            div.className = 'p-2 m-4 rounded border';
            div.innerHTML = `
                        <div class="img-div  mb-4 ">
                            <img src="${player.strThumb}" width="100%" class="rounded" alt="player">
                        </div>
                        <h3 class="text-2xl mb-2">${player.strPlayer}</h3>
                        <h4 class="text-1xl">${player.strNationality} </h4>
                        <div class="player-btn flex justify-between my-3">
                            <button id="delete-btn" class=" delete-button py-2 px-4 rounded border bg-red-500 text-white">Delete</button>
                            <button onclick="detailsPlayer('${player.idPlayer}')" class="py-2 px-4 rounded border bg-green-500 text-white">Details</button>
                        </div>
            `;
            container.appendChild(div);
    });
    }catch(error){
        playerError.innerText = "No Players Items";
    }
    // delete player  function
    const deleteButton = document.getElementsByClassName('delete-button');
    for(const deleteBtn of deleteButton){
        deleteBtn.addEventListener('click', function (event){
            event.target.parentNode.parentNode.style.display = 'none';
        });
    }
}
// details api data load function 
const detailsPlayer = async (player) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${player}`;
    const response = await fetch(url)
    const data = await response.json();
    getDetailsPlayer(player);
}
//  players details function  
const getDetailsPlayer= (del) =>{
    
}