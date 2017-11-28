
//BUDGET CONTROLLER
var budgetController = (function(){

   //data model for expenses and income

   //function constructor
   var Expense = function(id, description, value){
       this.id = id;
       this.description =  description;
       this.value = value;
    }

   var Income = function(id, description, value){
    this.id = id;
    this.description =  description;
    this.value = value;
    }
   
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            //create new id
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            //create new item inc/exp
            if(type ==='exp'){

                newItem = new Expense(ID, des, val)
            } else if(type ==='inc') {

                newItem = new Income(ID, des, val)

            }
           
            //push into data structure and return new item
            data.allItems[type].push(newItem);
            return newItem;
        }
    }

})();



//UI CONTROLLER
var UIController = (function(){


var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
};


    //return an object, will be assigned to the UIController var
    //and be used publicly
     //returns an object with the 3 input properties
    return {
        getInput: function(){
            return {
                type:  document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
          }
        } ,

        addListItem: function(obj, type){
            var html, newHtml, element;

            //create html string with placeholder text
            
            if(type === 'inc'){

                element =  DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'


            } else if (type === 'exp'){

                element =  DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }

            // replace the placeholder text with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);



            //insert the html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },


        clearFields: function (){
            var fields, fieldsArray;

           fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
         

            //querySelectorAll returns a list, need
            //to change this to an array as follows:
            //reset the input fields to blank
           fieldsArray = Array.prototype.slice.call(fields);
           
           fieldsArray.forEach(function(current,index,array){
            current.value = "";

           });

           fieldsArray[0].focus();

        },

        //function to return the DOMStrings 
        getDOMstrings: function(){
            return DOMstrings;
        }

    }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){


var setupEventListeners = function(){
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
    
    document.addEventListener('keypress', function(event)
    {
        if(event.keyCode === 13 || event.which === 13)
        {
                ctrlAddItem();
        }
    } );  
}//end of setupEventListeners

var updateBudget =  function(){
    
    //1. Calculate the budget

    //2. return the budget

    //3. Display the budget on the UI
};



var ctrlAddItem = function(){

    var input, newItem;

    //1. Get the field input data
     input = UICtrl.getInput();
     


    //form validate
    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {

         //2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
     //3. Add the new item to the user interface
 
     UICtrl.addListItem(newItem, input.type);
 
     //4. Clear the fields
     UICtrl.clearFields();
 
     //5. Calculate and update budget
     updateBudget();   

    }
 ;}//end of ctrlAddItem


return {
    init: function(){
        console.log('application started');
        setupEventListeners();

    }
}


})(budgetController,UIController);

controller.init();