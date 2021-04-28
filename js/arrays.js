function diaSemana(dia,mes,anio){
        var dias=[
                "Domingo", 
                "Lunes", 
                "Martes", 
                "Miércoles", 
                "Jueves", 
                "Viernes", 
                "Sábado"
        ];
        var dt = new Date(mes+' '+dia+', '+anio);
        document.getElementById('diaSemana').innerHTML = "Hoy es un gran día " + dias [dt.getUTCDay()];    
    };
    
    var dia="16";
    var mes="November";
    var anio="2016";
    diaSemana(dia, mes,anio);