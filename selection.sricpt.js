document.getElementById('public-transport').addEventListener('click', function() {
    alert('Public Transportation selected!');
});

document.getElementById('private-transport').addEventListener('click', function() {
    alert('Private Transportation selected!');
    
});

// Toggle dropdown menu
document.getElementById('menuIcon').addEventListener('click', function() {
    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});