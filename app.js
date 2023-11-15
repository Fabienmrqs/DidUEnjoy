var cards_settings = document.getElementById('card_settings');
var kpi_ico_info = document.getElementById('kpi_satisfaction_ico_info');


  function createKPI(){
    const kpiDiv = document.createElement("div");
     kpiDiv.classList.add("kpi_created_display_block");

     kpiDiv.addEventListener('click', function() {
        kpiDiv.style.border='solid blue';
        cards_settings.style.display ="block";
        if(document.forms['card_settings_form'].kpi_name.value === "") {
            kpi_ico_info.style.display = "none"
        }
    }, false);
    document.getElementById("kpi_container").appendChild(kpiDiv);
    
  }


  function dropDown() {
    console.log('dropdown')
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.card_settings_trend_input')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }