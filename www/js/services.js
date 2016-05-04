function realizarInferencia(){
  var engine = new InfernalEngine();

  // Adds a rule named "increment" to increment the value of 'i' up to 5.
  engine.addRule("comprobarSileGustaElBalón", function(done) {
      if(this.get('visitasMensualesAElBalón') > 2) {
          this.set('leGustaElBalón', true);
      } else {
          this.set('leGustaElBalón', false);
      }
      done();
  });

  engine.addRule('comprobarNumeroDeLugaresQueLeGustanDeRestaurantes', function(done){
      if(this.get('leGustaElBalón') && this.get('ElBalónEsBarRestaurante')) {
          var numero = this.get('numeroDeLugaresQueLeGustanDeRestaurantes');
          this.set('numeroDeLugaresQueLeGustanDeRestaurantes', numero+1);
          done();
      }
      done();
  });

  engine.addRule('comprobarSiLeGustaBarRestaurantes', function(done) {
      if(this.get('numeroDeLugaresQueLeGustanDeRestaurantes') > 3) {
          this.set('leGustaBarRestaurante', true);
      } else {
          this.set('leGustaBarRestaurante', false);
      }
      done();
  });

  engine.addRule("comprobarSileGustaMcDonalds", function(done) {
      if(this.get('visitasMensualesAMcDonalds') > 2) {
          this.set('leGustaMcDonalds', true);
      } else {
          this.set('leGustaMcDonalds', false);
      }
      done();
  });

  engine.addRule('comprobarNumeroDeLugaresQueLeGustanDeComidaRapida', function(done){
      if(this.get('leGustaMcDonalds') && this.get('McDonaldsEsComidaRapida')) {
          var numero = this.get('numeroDeLugaresQueLeGustanDeComidaRapida');
          this.set('numeroDeLugaresQueLeGustanDeComidaRapida', numero+1);
          done();        
      }
      done();
  });

  engine.addRule('comprobarSiLeGustaComidaRapida', function(done) {
      if(this.get('numeroDeLugaresQueLeGustanDeComidaRapida') > 3) {
          this.set('leGustaComidaRapida', true);
      } else {
          this.set('leGustaComidaRapida', false);
      }
      done();
  });

  engine.addRule("comprobarSileGustaBurgerKing", function(done) {
      if(this.get('visitasMensualesABurgerKing') > 2) {
          this.set('leGustaBurgerKing', true);
      } else {
          this.set('leGustaBurgerKing', false);
      }
      done();
  });

  engine.addRule('comprobarNumeroDeLugaresQueLeGustanDeComidaRapida', function(done){
      if(this.get('leGustaBurgerKing') && this.get('BurgerKingEsComidaRapida')) {
          var numero = this.get('numeroDeLugaresQueLeGustanDeComidaRapida');
          this.set('numeroDeLugaresQueLeGustanDeComidaRapida', numero+1);
          done();        
      }
      done();
  });

  engine.addRule('ComprobarSileGustaRecorcholis', function(done){
      if(this.get('visitasMensualesARecorcholis') > 2) {
          this.set('leGustaRecorcholis', true);
      } else {
          this.set('leGustaRecorcholis', false);
      }
      done();
  });

  engine.addRule('AgregarNumerosDeBoliche', function(done){
      if(this.get('leGustaRecorcholis') && this.get('RecorcholisEsBoliche')) {
          var numero= this.get('numeroDeLugaresQueLeGustanDeBoliches')
          this.set('numeroDeLugaresQueLeGustanDeBoliches', numero +1);
      }   
      done();
  });

  engine.addRule('ComprobarsiLeGustanBoliches', function(done){
      if(this.get('numeroDeLugaresQueLeGustanDeBoliches') > 3 ) {
          this.set('leGustaBoliches', true);
      } else {
          this.set('leGustaBoliches', false);
      }
      done();
  });

  engine.addRule('ComprobarSiOfrecerPromocionesDeRecorcholis', function(done){
      if(this.get('leGustaRecorcholis') && this.get('esViernes') && this.get('edad') >21 ) {
          this.set('ofrecerPromocionesDeRecorcholis', true);
      }else{
          this.set('ofrecerPromocionesDeRecorcholis', false);
      }   
      done();
  });

  // Set a value to the fact "i"
  engine.set('visitasMensualesAElBalón',30);
  engine.set('ElBalónEsBarRestaurante', true);
  engine.set('numeroDeLugaresQueLeGustanDeRestaurantes', 0);
  engine.set('visitasMensualesMcDonalds', 3);
  engine.set('visitasMensualesBurgerKing', 3);
  engine.set('McDonaldsEsComidaRapida', true);
  engine.set('BurgerKingEsComidaRapida', true);
  engine.set('numeroDeLugaresQueLeGustanDeComidaRapida', 0);
  engine.set('visitasMensualesARecorcholis', 4);
  engine.set('esViernes', true)
  engine.set('RecorcholisEsBoliche', true);
  engine.set('numeroDeLugaresQueLeGustanDeBoliches', 0);
  engine.set('edad', 20);


  // launches inference
  engine.infer(function(err) {
      if (err) {
          console.log(err);
          return;
      }

      // will print "5"
      console.log(engine.get("leGustaElBalón"));
      console.log(engine.get("numeroDeLugaresQueLeGustanDeRestaurantes"));
      console.log(engine.get('leGustaBarRestaurante'));
      console.log(engine.get("leGustaMcDonalds"));
      console.log(engine.get("leGustaBurgerKing"));
      console.log(engine.get("numeroDeLugaresQueLeGustanDeComidaRapida"));
      console.log(engine.get('leGustaComidaRapida'));
      console.log(engine.get("leGustaRecorcholis"));
      console.log(engine.get("leGustaBoliches"));
      console.log(engine.get("numeroDeLugaresQueLeGustanDeBoliches"));
      console.log(engine.get('ofrecerPromocionesDeRecorcholis'));
      return 5;
  });
}

angular.module('starter.services', [])

.factory('profileService', function(){
  return {
    inferir: function(){
      return realizarInferencia();
    },
    getProfiles: function(){
      return [];
    },
    getProfile: function(){
      return {};
    }
  }
})

.factory('addsService', function(){
  return {
    getPublicidades: function(){
      return publicidades;
    }
  }
});
