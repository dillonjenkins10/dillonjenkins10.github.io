$(document).ready(function(){
    $(function(){
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    /*
    document.getElementById('smoothie').addEventListener('submit', function(event){
        event.preventDefault();
    });*/

    document.getElementById('smoothie').addEventListener('submit', function(event){
        /* prevent default */
        event.preventDefault();

        /* get checkboxes */
        const checkboxes = document.querySelectorAll('input[name="toppings"]:checked')
        var description = "You made a smoothie that contains: ";

        /* if different amounts of checkboxes are selected*/
        if (checkboxes.length === 0){
            description = "Here is your empty cup!"
        } else if (checkboxes.length === 1) {
            description += checkboxes[0].value + ". Enjoy!";
        } else if (checkboxes.length === 2) {
            description += checkboxes[0].value + " and " + checkboxes[1].value + ". Enjoy!";
        } else {
            /* loop through checkboxes and get all the values */
            for (var i = 0; i < checkboxes.length-1; i++){
                description += checkboxes[i].value + ", ";
            }

            /* add the last topping */
            description += "and " + checkboxes[checkboxes.length-1].value + ". Enjoy!";
        }

        /* finally send the description to the paragraph element reserved for it. */
        document.getElementById('desc').innerHTML = description;
    })
    

})