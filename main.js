"use strict";

const 
presets = 
`{ "presets" : [
	{ 
		"field" : "btn_rss", 
		"data" : [
			{ "k": "input", "v": " rss  feed       " }, 
			{ "k": "vertical", "v": "-1" }, 
			{ "k": "color", "v": "fff" }, 
			{ "k": "style", "v": "normal" }, 
			{ "k": "stroke", "v": "" }, 
			{ "k": "shadow", "v": "0.3" }, 
			{ "k": "background", "v": "888" }, 
			{ "k": "border", "v": "000" }, 
			{ "k": "iborder", "v": "fff" }, 
			{ "k": "ladj", "v": "27" }, 
			{ "k": "radj", "v": "27" }, 
			{ "k": "lseg", "v": "f73" }, 
			{ "k": "rseg", "v": "888" }, 
			{ "k": "lborder", "v": "fff" }, 
			{ "k": "rborder", "v": "888" } 
		]
	}, { 
		"field" : "btn_atom", 
		"data" : [
			{ "k": "input", "v": " atom  feed     " }, 
			{ "k": "vertical", "v": "-1" }, 
			{ "k": "color", "v": "fff" }, 
			{ "k": "style", "v": "normal" }, 
			{ "k": "stroke", "v": "" }, 
			{ "k": "shadow", "v": "0.3" }, 
			{ "k": "background", "v": "888" }, 
			{ "k": "border", "v": "000" }, 
			{ "k": "iborder", "v": "fff" }, 
			{ "k": "ladj", "v": "35" }, 
			{ "k": "radj", "v": "35" }, 
			{ "k": "lseg", "v": "f73" }, 
			{ "k": "rseg", "v": "888" }, 
			{ "k": "lborder", "v": "fff" }, 
			{ "k": "rborder", "v": "888" } 
		]
	}, { 
		"field": "btn_reset", 
		"data" : [
			{ "k": "input", "v": "-  Cyberpunk  -" }, 
			{ "k": "vertical", "v": "-1" }, 
			{ "k": "color", "v": "fff" }, 
			{ "k": "style", "v": "normal" }, 
			{ "k": "stroke", "v": "000" }, 
			{ "k": "shadow", "v": "0.1" }, 
			{ "k": "background", "v": "263238" }, 
			{ "k": "border", "v": "000" }, 
			{ "k": "iborder", "v": "FFCA28" }, 
			{ "k": "ladj", "v": "25" }, 
			{ "k": "radj", "v": "25" }, 
			{ "k": "lseg", "v": "263238" }, 
			{ "k": "rseg", "v": "263238" }, 
			{ "k": "lborder", "v": "263238" }, 
			{ "k": "rborder", "v": "263238" } 
		]
	}
] }`;

function gId( n ) {
	return document.getElementById( n );
}

function cr( n ) {
	return document.createElement( n );
}

function qr( l ) {
	return document.querySelectorAll( l );
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

function fl( j ) {
	const p = JSON.parse( j );
	
	for ( const i of p.presets ) {
		gId( i.field ).addEventListener( 'click', function() {
			for( const d of i.data ) {
				gId( d.k ).value = d.v;
			}
		} );
	}
}

window.onload = () => {
	
	fl( presets );
	
	const
	w	= 88,
	h	= 15,
	c	= cr( 'canvas' ),
	rc	= cr( 'canvas' ),
	t	= gId( 'input' ),
	v	= gId( 'vertical' ),
	o	= gId( 'color' ),
	s	= gId( 'style' ),
	k	= gId( 'stroke' ),
	d	= gId( 'border' ),
	
	i	= gId( 'iborder' ),
	sh	= gId( 'shadow' ),
	
	la	= gId( 'ladj' ),
	ra	= gId( 'radj' ),
	ls	= gId( 'lseg' ),
	rs	= gId( 'rseg' ),
	
	lb	= gId( 'lborder' ),
	rb	= gId( 'rborder' ),
	
	u	= gId( 'history' ),
	g	= gId( 'background' ),
	a	= gId( 'save' ),
	x	= c.getContext( '2d' ),
	dx	= rc.getContext( '2d' );
	
	
	gId( 'generated' ).appendChild( c );
	c.width = ( w * 2 ) + 3;
	c.height = ( h * 2 ) + 3;
	
	rc.width = w;
	rc.height = h;
	
	dx.imageSmoothingEnabled	= false;
	dx.shadowBlur			= 0;
	
	x.imageSmoothingEnabled 	= false;
	x.textBaseline	= 'middle';
	x.textAlign	= 'center';
	x.shadowBlur	= 0;
	
	const r = () => {
		b();
		setTimeout( r, 100 );
	};
	
	const b = () => {
		const
		tx		= t.value,
		cx		= c.width / 2,
		cy		= ( c.height / 2 ) + parseInt( v.value ),
		ts		= parseFloat( sh.value ),
		lx		= parseInt( la.value ) * 2,
		rx		= parseInt( ra.value ) * 2;
		
		// Border
		x.fillStyle	= '#' + d.value;
		x.fillRect( 0, 0, c.width, c.height);
		
		// Inner
		x.fillStyle	= '#' + i.value;
		x.fillRect( 2, 2, c.width - 4, c.height - 4 );
		
		// Background
		x.fillStyle	= '#' + g.value;
		x.fillRect( 4, 4, c.width - 8, c.height - 8 );
		
		// Left segment
		x.fillStyle	= '#' + ls.value;
		x.fillRect( 4, 4, lx, c.height - 8 );
		
		// Left border
		x.fillStyle	= '#' + lb.value;
		x.fillRect( lx + 4, 4, 2, c.height - 8 );
		
		// Right segment
		x.fillStyle	= '#' + rs.value;
		x.fillRect( c.width - ( rx + 4 ), 4, rx, c.height - 8 );
		
		// Right border
		x.fillStyle	= '#' + rb.value;
		x.fillRect( c.width - ( rx + 5 ), 4, 2, c.height - 8 );
		
		x.font		= s.value + ' 14.2pt Silkscreen';
		
		// Text stroke
		if ( k.value ) {
			x.strokeStyle	= '#' + k.value;
			x.lineWidth	= 2;
			x.strokeText( tx, cx, cy );
		}
		
		// Foreground text
		x.strokeStyle	= 'rgba( 0, 0, 0, ' + ts + ' )';
		x.lineWidth	= 0;
		x.strokeText( tx, cx, cy );
		
		x.fillStyle	= '#' + o.value;
		x.fillText( tx, cx, cy );
	};
	
	a.addEventListener( 'click',  function() {
		dx.drawImage( c, 0, 0, c.width, c.height, 0, 0, w, h );
		
		const
		el = cr( 'li' ),
		im = cr( 'img' ),
		ah = cr( 'a' ),
		dt = rc.toDataURL(),
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


