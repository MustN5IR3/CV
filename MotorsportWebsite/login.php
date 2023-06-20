<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Motorsport Login & Register</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Motorsports" name="keywords">
        <meta content="Motorsports E-commerce" name="description">
        
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Source+Code+Pro:700,900&display=swap" rel="stylesheet">
        <!-- CSS Libraries -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="lib/slick/slick.css" rel="stylesheet">
        <link href="lib/slick/slick-theme.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
        
        <!--AJAX-->
        <script src="js/ajaxx.js"></script>
    </head>

    <body>
        <!-- Top bar Start -->
        <div class="top-bar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <i class="fa fa-envelope"></i>
                        motorsport@motorsports.com
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-phone-alt"></i>
                        +230 51234567
                    </div>
                </div>
            </div>
        </div>
        <!-- Top bar End -->
        
        <!-- Nav Bar Start -->
        <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="index.html" class="navbar-brand">Home</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            <a href="index.html" class="nav-item nav-link">Home</a>
                            <a href="product-list.php" class="nav-item nav-link">Products</a>
                            <a href="cart.php" class="nav-item nav-link">Cart</a>
                            <a href="index.html#checkout" class="nav-item nav-link">Checkout</a>
                            <a href="index.html#about" class="nav-item nav-link">About us</a>
                            <?php
                                if(isset($_SESSION["useruid"])){
                                    echo "<a href='includes/logout.inc.php' class='nav-item nav-link active'>Log out</a>";
                                }else{
                                    echo"<a href='login.php' class='nav-item nav-link active'>Login & Register</a>";
                                }
                            ?>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- Nav Bar End -->      
        
        <!-- Bottom Bar Start -->
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <div class="logo">
                            <a href="index.html">
                                <img src="img/logo.png" alt="Logo">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="user">
                            <a href="cart.php" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Bottom Bar End --> 
        
        <!-- Breadcrumb Start -->
        <div class="breadcrumb-wrap">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="product-list.php">Products</a></li>
                    <li class="breadcrumb-item active">Login & Register</li>
                </ul>
            </div>
        </div>
        <!-- Breadcrumb End -->
        
        <!-- Login Start -->
        <div class="login">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">    
                        <form class="register-form" action="includes/signup.inc.php" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Full Name</label>
                                    <input class="form-control" name="name" type="text" placeholder="Full Name">
                                </div>
                                <div class="col-md-6">
                                    <label>E-mail</label>
                                    <input class="form-control" name="email" type="text" placeholder="E-mail">
                                </div>
                                <div class="col-md-6">
                                    <label>Username</label>
                                    <input class="form-control" name="uid" type="text" placeholder="username">
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" name="pwd" type="password" placeholder="Password">
                                </div>
                                <div class="col-md-6">
                                    <label>Retype Password</label>
                                    <input class="form-control" name="pwdrepeat" type="password" placeholder="Password">
                                </div>
                                <div class="col-md-6">
                                    <button class="btn" name="submit">Sign up</button>
                                    
                                </div>
                                <div class ="col-md-6" style ="color:red;">
                                    <?php
                                        if(isset($_GET["error"])){
                                            if($_GET["error"]== "emptyinput"){
                                                echo"<p>Fill in all fields!</p>";
                                            }
                                            elseif($_GET["error"]== "invaliduid"){
                                                echo"<p>Choose a proper username!</p>";
                                            }
                                            elseif($_GET["error"]== "invalidemail"){
                                                echo"<p>Choose a proper email!</p>";
                                            }
                                            elseif($_GET["error"]== "passwordmismatch"){
                                                echo"<p>Passwords don't match!</p>";
                                            }
                                            elseif($_GET["error"]== "stmtfailed"){
                                                echo"<p>Something went wrong.Try again!</p>";
                                            }
                                            elseif($_GET["error"]== "usernameoremailtaken"){
                                                echo"<p>Username or Email already taken!</p>";
                                            }
                                            elseif($_GET["error"]== "none"){
                                                echo"<p>Successfully signed up</p>";
                                            }
                                        }
                                    ?>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6">
                        <form class="login-form" action="includes/login.inc.php" method="post">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>E-mail / Username</label>
                                    <input class="form-control" name="uid" type="text" placeholder="E-mail / Username">
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" name="pwd" type="password" placeholder="Password">
                                </div>
                                <div class="col-md-12" style ="color:red;">
                                   <?php
                                        if(isset($_GET["error"])){
                                            if($_GET["error"]== "emptyinput"){
                                                echo"<p>Fill in all fields!</p>";
                                            }
                                            elseif($_GET["error"]== "wronglogin"){
                                                echo"<p>Incorrect login information!</p>";
                                            }
                                        }
                                    ?>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn" name = "submit">Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Login End -->
        
       <!-- Footer Start -->
        <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Get in Touch</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>University of Mauritius Reduit-moka</p>
                                <p><i class="fa fa-envelope"></i>motorsport@motorsports.com</p>
                                <p><i class="fa fa-phone"></i>+230 51234567</p>
                            </div>
                        </div>
                    </div>
                    
    

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Company Info</h2>
                            <ul>
                                <li><a href="index.html#about">About Us</a></li>
                            </ul>
                            
                        </div>
                    </div>

                  
                </div>
                
                <div class="row payment align-items-center">
                    <div class="col-md-6">
                        <div class="payment-method">
                            <h2>We Accept:</h2>
                            <img src="img/payment-method.png" alt="Payment Method" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        
        <!-- Footer Bottom Start -->
 
        <!-- Footer Bottom End -->       
        
        <!-- Back to Top -->
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
        
        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/slick/slick.min.js"></script>
        
        <!-- Template Javascript -->
        <script src="js/main.js"></script>
    </body>
</html>
