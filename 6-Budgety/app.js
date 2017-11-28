
//BUDGET CONTROLLER
var budgetController = (function(){

   //data model for expenses and income

   //function constructor
   var Expense = function(id, description, value){
       this.id = id;
       this.description =  description;
       this.value = value;
       this.percentage = -1;
    };

    Expense.prototype.calcPercentage =  function(totalInc){
        if(totalInc > 0){
            this.percentage = Math.round((this.value / totalInc) * 100);
        } else {this.percentage = -1;}  
    };

    Expense.prototype.getPercentage =  function(){
        return this.percentage;
    }

   var Income = function(id, description, value){
    this.id = id;
    this.description =  description;
    this.value = value;
    }
   

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(curr){
            sum += curr.value;

        })
        data.totals[type] = sum;

    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }, 
        budget: 0, 
        percentage: -1
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
        } , 

        deleteItem: function(type, id){

            //map (like foreach) but returns new array
            //loop over all the exp or inc objects and return the id's
            //put these into a new array called ids
            var ids =  data.allItems[type].map(function(current){
                return current.id
            })

            //[2 3 4 6 8] --get the index/position in the array of the ID that we want to delete
            index = ids.indexOf(id)

            //delete the item
            //index can be -1 if the id id not found
            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
        },

        calculateBudget: function(){

            //calc total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calc budget - inc less exp
            data.budget = data.totals.inc - data.totals.exp;

            //calc % of income spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

            
        },

        calculatePercentages: function(){
            /*
            a = 10
            b = 20
            c = 40

            income = 100

            10/100 , 20/100, 40/100
            */ 
            data.allItems.exp.forEach(function(curr){
                curr.calcPercentage(data.totals.inc);
            })

        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            })

            return allPerc;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }

        },

        testing: function(){
            console.log(data);
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
    expensesContainer: '.expenses__list', 
    incomeLabel:       '.budget__income--value',
    expensesLabel:    '.budget__expenses--value',
    percentageLabel:  '.budget__expenses--percentage', 
    budgetLabel: '.budget__value', 
    container: '.container', 
    expensesPercLabel: '.item__percentage', 
    dateLabel: '.budget__title--month'

};




var formatNumber = function(num, type){
    var numSplit, int, dec, type;
    /*
    + or - before number
    exactly 2 decimal points
    comma separating the thousands
    */

    //removes the sign of the number, absolute
    num = Math.abs(num);
    //method of the number prototype, fix to 2 points
    num = num.toFixed(2);

    //stored in an array
    numSplit = num.split('.')

    int = numSplit[0];

    //more than 1000, add the comma
    if(int.length > 3){
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3)
    }

    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec; 
}

var nodeListForEach = function(list, callback){
    for(var  i = 0; i < list.length; i++){
        callback(list[i], i);
    }
}






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

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'


            } else if (type === 'exp'){

                element =  DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }

            // replace the placeholder text with some actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));



            //insert the html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){
                var el = document.getElementById(selectorID)
            //can only remove child elements, need to get to the parent
            //and remove from there

             el.parentNode.removeChild(el);

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


        displayBudget: function(obj){

            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }

        },

        displayPercentages: function(percentages){
            
            //returns node list
            var fields  = document.querySelectorAll(DOMstrings.expensesPercLabel);

            nodeListForEach(fields, function(current, index){

                if(percentages[index] > 0){

                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---'
                }
            })
        },

        displayMonth: function(){
            var now, month, months, year
            now = new Date();
            year = now.getFullYear();
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            month = now.getMonth()
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
            ;
            

        },

        changeType: function(){

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue)

        nodeListForEach(fields, function(cur){
         cur.classList.toggle('red-focus')})

         document.querySelector(DOMstrings.inputButton).classList.toggle('red');
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

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)


}//end of setupEventListeners



var updateBudget =  function(){
    
    //1. Calculate the budget
    budgetCtrl.calculateBudget();

    //2. return the budget
    var budget = budgetCtrl.getBudget();

    //3. Display the budget on the UI
    UICtrl.displayBudget(budget);
};//end of updateBudget 

var updatePercentages = function(){
    //1. calculate percentages
    budgetCtrl.calculatePercentages();

    //2. read percentages from the budget controller
    var percentages =  budgetCtrl.getPercentages();

    //3. update the UI
    UICtrl.displayPercentages(percentages);

}//end of updatePercentages


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

     //6. calc and update percentages
     updatePercentages();

    }
 ;}//end of ctrlAddItem


var ctrlDeleteItem = function(event){
    var itemID, splitID, type, ID;
    //get the id of the element to be deleted
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

    if(itemID){
        //inc-1

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);
    }

    //1. Delete the item from the internal data structure
    budgetCtrl.deleteItem(type, ID);

    //2. Delete the item from the UI
    UICtrl.deleteListItem(itemID);

    //3. Update and show the budget
    updateBudget();

    //6. calc and update percentages
    updatePercentages();

}//end of ctrlDeleteItem






return {
    init: function(){
        console.log('application started');
        UICtrl.displayMonth();
        setupEventListeners();
        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
        });
    }
}


})(budgetController,UIController);

controller.init();