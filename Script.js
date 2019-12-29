window.onload = function()
{
    if(document.cookie.length!=0)
    {
        document.getElementById('video_body').style.display="none";
        document.getElementById('Playlist_body').style.display='block'
    }
}

function showPlaylist()
{
    document.getElementById('video_body').style.display="none";
    document.getElementById('Playlist_body').style.display='block';
    document.cookie = "style = document.getElementById('Playlist_body').style.display='block'";

}

function changePath()
{
    document.cookie = "style =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    window.location.href = "/Home_page.html"
}




var article = document.querySelector(".atag");
console.log(document.getElementsByClassName("name"))
document.getElementsByClassName("name").setAttribute("value", article.dataset.name)
                    