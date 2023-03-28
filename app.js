const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')
//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());    
app.use(cors());

const value = [
    {
        "x": 2003, 
        "y":30,
    },
    {
        "x": 2006, 
        "y":10,
    },
    {
        "x": 2009, 
        "y":46,
    },
    {
        "x": 2012, 
        "y":19,
    },
    {
        "x": 2015, 
        "y":24,
    },
    {
        "x": 2018, 
        "y":31,
    },
    {
        "x": 2023, 
        "y":8,
    }
];

const val2 = [
    7,6,5,4,4,3,3,3,3,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1
]

const val21 = [
    {
        "x": '14-19', 
        "y": 67.7,
    },
    {
        "x": '20-24', 
        "y": 67.4,
    },
    {
        "x": '25-34', 
        "y": 68.5,
    },
    {
        "x": '35-44', 
        "y": 71.2,
    },
    {
        "x": '45-54', 
        "y": 80.6,
    },
    {
        "x": '55-64', 
        "y": 85.1,
    },
    {
        "x": '65-74', 
        "y": 88.1,
    },
    {
        "x": '>74', 
        "y": 90.2,
    }
]

const values = [
    'HGV-1562',
    'SPA-9331',
    'ALT-4597',
    'SSS-3898',
    'IMS-8080',
    'PNG-1234' 
]

/*value.forEach(function(val) {
    console.log(val);
});*/

//function comparar ( a, b ){ return a - b; }
console.log(
    values.sort(
        function( a, b ){
            return a.Time - b.Time;
        }
    )
);

//GET
app.get('/', (req, res) => {    
   res.json(value);
});

app.get('/soccer', (req, res1) => {    
    res1.json(val2);
 });

app.get('/tv', (req, res11) => {    
    res11.json(val21);
 });

 app.get('/placas', (req, res12) => {    
    res12.json(values);
 });

//Start Server
app.listen(3000,() => {
   console.log(`Server on port ${3000}`);
});