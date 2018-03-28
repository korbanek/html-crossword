<!DOCTYPE html>
<html>
    <head>
        <style>
            body{
                margin: 0;
                padding: 0;
            }
            #crossword{
                display: block;
                width: auto;
                float: left;
            }
            .controls{
                width: auto;
                float: left;
                padding: 20px;
            }
        </style>
        <link rel="stylesheet" href="build/css/main.css">
    </head>
    <body>
        <div id="crossword"></div>
        <div class="controls">
            <button type="button" id="clear_button">Clear</button>
            <button type="button" id="check_button">Check</button>
            <button type="button" id="solve_button">Solve</button>
        </div>

        <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="build/js/bundle.js"></script>
        <script>
            var crosswordFields = [
                [ 0 ,  0 ,  0 ,  1 , 'K', 'O', 'K', 'A', 'R', 'D', 'K', 'A',  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  0 ,  0 ,  1 , 'A', 'T', 'O', 'P', 'O', 'W', 'A',  0 ],
                [ 0 ,  0 ,  0 ,  1 , 'W', 'Y', 'S', 'O', 'K', 'A',  0 ,  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  1 , 'S', 'E', 'R', 'D', 'U', 'S', 'Z', 'K', 'A',  0 ],
                [ 0 ,  0 ,  0 ,  1 , 'A', 'P', 'T', 'E', 'K', 'A',  0 ,  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  1 , 'P', 'O', 'L', 'A', 'R', 'N', 'E',  0 ,  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  1 , 'D', 'E', 'R', 'M', 'A', 'T', 'O', 'L', 'O', 'G'],
                [ 1 , 'K', 'A', 'R', 'U', 'Z', 'E', 'L', 'A',  0 ,  0 ,  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  0 ,  1 , 'S', 'Z', 'A', 'L', 'I', 'K',  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  0 ,  0 ,  1 , 'Ś', 'N', 'I', 'E', 'G',  0 ,  0 ,  0 ],
                [ 0 ,  0 ,  0 ,  1 , 'S', 'W', 'Ę', 'D', 'Z', 'E', 'N', 'I', 'E',  0 ],
                [ 0 ,  0 ,  1 , 'C', 'O', 'D', 'Z', 'I', 'E', 'N', 'N', 'I', 'E',  0 ],
                [ 0 ,  0 ,  0 ,  0 ,  1 , 'S', 'P', 'A', 'Ć',  0 ,  0 ,  0 ,  0 ,  0 ]
            ];

            var crosswordGame = new Crossword(crosswordFields, 7, document.getElementById('crossword'));
            crosswordGame.draw();

            document.getElementById('clear_button').addEventListener('click', function(){
                crosswordGame.clear();
            });

            document.getElementById('check_button').addEventListener('click', function(){
                crosswordGame.check();
            });

            document.getElementById('solve_button').addEventListener('click', function(){
                crosswordGame.solve();
            });
        </script>
    </body>
</html>