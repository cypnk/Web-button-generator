"use strict";

function gId( n ) {
	return document.getElementById( n );
}

function cr( n ) {
	return document.createElement( n );
}

function gk( c, s ) {
	const l	= c.length;
	var
	r	= '',
	s	= s || 25;
	
	for ( var i = 0; i < s; i++ ) {
		r += c.charAt( Math.floor( Math.random() * l ) );
	}
	return r;
}

window.onload = () => {
	const
	w	= 88,
	h	= 15,
	c	= cr( 'canvas' ),
	t	= gId( 'input' ),
	o	= gId( 'color' ),
	s	= gId( 'style' ),
	k	= gId( 'stroke' ),
	d	= gId( 'border' ),
	
	i	= gId( 'iborder' ),
	ls	= gId( 'lseg' ),
	rs	= gId( 'rseg' ),
	
	lb	= gId( 'lborder' ),
	rb	= gId( 'rborder' ),
	
	u	= gId( 'history' ),
	g	= gId( 'background' ),
	a	= gId( 'save' ),
	x	= c.getContext( '2d' );
	
	c.width		= w;
	c.height	= h;
	
	gId( 'generated' ).appendChild( c );
	x.textBaseline	= 'middle';
	x.textAlign	= 'center';
	
	const r = () => {
		b();
		setTimeout( r, 100 );
	};
	
	const b = () => {
		const 
		tx		= t.value,
		cx		= c.width / 2,
		cy		= ( c.height / 2 ) - 1;
		
		// Border
		x.fillStyle	= '#' + d.value;
		x.fillRect( 0, 0, c.width, c.height);
		
		// Inner
		x.fillStyle	= '#' + i.value;
		x.fillRect( 1, 1, c.width - 2, c.height - 2 );
		
		// Background
		x.fillStyle	= '#' + g.value;
		x.fillRect( 2, 2, c.width - 4, c.height - 4 );
		
		// Left segment
		x.fillStyle	= '#' + ls.value;
		x.fillRect( 2, 2, 25, c.height - 4 );
		
		// Left border
		x.fillStyle	= '#' + lb.value;
		x.fillRect( 26, 2, 1, c.height - 4 );
		
		// Right segment
		x.fillStyle	= '#' + rs.value;
		x.fillRect( c.width - 27, 2, 25, c.height - 4 );
		
		// Right border
		x.fillStyle	= '#' + rb.value;
		x.fillRect( c.width - 27, 2, 1, c.height - 4 );
		
		
		x.font		= s.value + ' 9px Silkscreen';
		
		// Text stroke
		if ( k.value ) {
			x.strokeStyle	= '#' + k.value;
			x.lineWidth	= 2;
			x.strokeText( tx, cx, cy );
		}
		// Foreground text
		x.fillStyle	= '#' + o.value;
		x.lineWidth	= 1;
		x.fillText( tx, cx, cy );
	};
	
	a.addEventListener( 'click',  function() {
		const 
		el = cr( 'li' ),
		im = cr( 'img' ),
		ah = cr( 'a' ),
		dt = c.toDataURL(),
		dl = gk( dt.replace( /\W/g, '' ) );
		
		ah.setAttribute( 'download', dl );
		ah.href	= dt;
		im.src	= dt;
		
		ah.appendChild( im );
		el.appendChild( ah );
		u.appendChild( el );
		
		this.href = dt;
		this.setAttribute( 'download', dl );
	} );
	
	r();
};


