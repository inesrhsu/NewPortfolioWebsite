uniform float u_time;

varying vec2 vUv;

vec3 colorA = vec3(0.0,0.0,1.0);
vec3 colorB = vec3(0.2,0.9,1.0);

void main() {   
  vec2 normalizedPixel = gl_FragCoord.xy/1100.0;
  vec3 color = mix(colorA*2.0 +sin((u_time)/2.0), colorB , vUv.x);

  gl_FragColor = vec4(color,1.0);
}

