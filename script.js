(function() {
  var appendContent = function() {
    var text = '<p>HII didi,</br>Socah tha english mai likhoon but english mai feel nahi atti fir socha hindi mai likhun but mujse hindi mai matra ki galti ho jatti hai, phier mana socha hinglish mai likhun isleya hinglish mai likh rahan hun.</br></br>Didi mujhe pata nahi apka mood kabhi kabhi wo naraz wala mood mai kyun change ho jaata hai aur kal kal toh apna block karna ka liya hi bol diya, moti behen apna dhyaan rakha karo aur koi baat ho toh mujhe nahi toh apke best-friends ka sath share kar liya karo but haan mara sath share karoge toh mai kisi ko nahi bataunga aur na hi ajj tak bataya hai </p>',
        contentDiv = document.querySelector('.content'),
        card = document.querySelector('#loadingCard');
    
    var letShow = function() {
          TweenMax.to(contentDiv, .3,
          {
            x: 50,
            rotation: '5deg'
            
          })},
        letHide = function() {
      TweenMax.to(contentDiv, .3,
      {
        x: 0,
        rotation: '0deg'
      })
    };
                  
    
    card.addEventListener('mouseover', letShow)
    card.addEventListener('mouseleave', letHide)
    
    contentDiv.innerHTML = text;
    contentDiv.offsetWidth = loadingWidth;
    
    card.addEventListener('click', function() {
      var contentAnimation = new TimelineMax();
      this.removeEventListener('mouseover', letShow);
      letHide();
      contentAnimation.add(TweenMax.to(card, 1.2, {
                  width: loadingWidth*2,
        ease: Elastic.easeOut
                }));
      
      console.log( loadingWidth );
      
      
      
    })
    
    
    
  }
  
  
  var animation = new TimelineMax(),
      loadingWidth = document.querySelector('#loadingCard').offsetWidth;
  
  animation.add(TweenMax.to('.cover', 3, {
                  width: loadingWidth
                }));
  animation.add(TweenMax.to('#loadingCard', 1, {
                  height: 384,
                  ease: Elastic.easeOut,
                  cursor: 'pointer'
                }));
  animation.add(TweenMax.staggerTo('.stagger', .7, {
                  opacity: 1,
                  display: 'block',
                  delay: -1,
                }, 0.2, appendContent));


}())
