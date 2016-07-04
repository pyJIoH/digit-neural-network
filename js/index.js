/**
 * Created by pyjioh on 04.07.2016.
 */
var brain = require('brain.js');
var net = new brain.NeuralNetwork();

net.train([{input: [0, 0], output: [0]},
    {input: [0, 1], output: [1]},
    {input: [1, 0], output: [1]},
    {input: [1, 1], output: [0]}]);

var output = net.run([0, 1]);  // [0.987]
console.log(output);
