// Change the list view in Mobilke/Tablet version

const ingredientsButton = document.getElementsByClassName('viewButton')[0];
const preparationButton = document.getElementsByClassName('viewButton')[1];

ingredientsButton.onclick = () => {viewIngredients()};
preparationButton.onclick = () => {viewPreparation()};

const informationsMobile = document.getElementsByClassName('listInformations')[0];


const viewIngredients = () => {

    informationsMobile.children[1].style.display = "none";
    informationsMobile.children[0].style.display = "flex";

    ingredientsButton.style.backgroundColor = "#F59F41";
    preparationButton.style.backgroundColor = "#E26F64";
}

const viewPreparation = () => {

    informationsMobile.children[0].style.display = "none";
    informationsMobile.children[1].style.display = "flex";
    
    preparationButton.style.backgroundColor = "#F59F41";
    ingredientsButton.style.backgroundColor = "#E26F64";

}