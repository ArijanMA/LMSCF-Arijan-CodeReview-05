$(document).ready(function () {
    var obj = Movies.Movie;
    var divItems = '';
    $.each(obj,function (i,item) {
       divItems += `<div class="card mb-3 col-sm-12 col-lg-6 mr-5  ml-3 text-white divMovie">
                        <div class="row no-gutters">
                            <div class="col-4">
                                 <img src="` + item.image + `" class="card-img" alt="Movie">
                            </div>
                            <div class="col-8 divInfo">
                                <div class="card-body">
                                    <h5 class="card-title">` + item.name + `</h5>
                                    <p class="card-text">` + item.Genre + `</p>                                    
                                    <div class="divLike">
                                        <p class="card-text pYear"><small class="text-muted">` + item.Year + `</small></p>
                                        <i onclick="AddLike(` + item.id + `)" class="fa fa-thumbs-up">Like</i>
                                        <p id="` + item.id + `" class="numLike">` + item.Like + `</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        // body...
    })
    $('#divcontainer').append(divItems);
    // body...
})
function AddLike(id) {
   var num= parseInt($("#"+id).text());
    num += 1;
    $("#"+id).html(num);
    // body...
}