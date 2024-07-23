import{E as B}from"./index-BdlI2FVT.js";function P(r,o){return r[0]=o[0],r[1]=o[1],r[2]=o[2],r[3]=o[4],r[4]=o[5],r[5]=o[6],r[6]=o[8],r[7]=o[9],r[8]=o[10],r}function Q(r,o){return r[0]=o[0],r[1]=o[1],r[2]=o[2],r[3]=o[3],r[4]=o[4],r[5]=o[5],r[6]=o[6],r[7]=o[7],r[8]=o[8],r}function R(r,o,u,s,a,c,e,i,M,h){return r[0]=o,r[1]=u,r[2]=s,r[3]=a,r[4]=c,r[5]=e,r[6]=i,r[7]=M,r[8]=h,r}function V(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function k(r,o){if(r===o){const u=o[1],s=o[2],a=o[5];r[1]=o[3],r[2]=o[6],r[3]=u,r[5]=o[7],r[6]=s,r[7]=a}else r[0]=o[0],r[1]=o[3],r[2]=o[6],r[3]=o[1],r[4]=o[4],r[5]=o[7],r[6]=o[2],r[7]=o[5],r[8]=o[8];return r}function w(r,o){const u=o[0],s=o[1],a=o[2],c=o[3],e=o[4],i=o[5],M=o[6],h=o[7],f=o[8],x=f*e-i*h,l=-f*c+i*M,m=h*c-e*M;let b=u*x+s*l+a*m;return b?(b=1/b,r[0]=x*b,r[1]=(-f*s+a*h)*b,r[2]=(i*s-a*e)*b,r[3]=l*b,r[4]=(f*u-a*M)*b,r[5]=(-i*u+a*c)*b,r[6]=m*b,r[7]=(-h*u+s*M)*b,r[8]=(e*u-s*c)*b,r):null}function C(r,o){const u=o[0],s=o[1],a=o[2],c=o[3],e=o[4],i=o[5],M=o[6],h=o[7],f=o[8];return r[0]=e*f-i*h,r[1]=a*h-s*f,r[2]=s*i-a*e,r[3]=i*M-c*f,r[4]=u*f-a*M,r[5]=a*c-u*i,r[6]=c*h-e*M,r[7]=s*M-u*h,r[8]=u*e-s*c,r}function D(r){const o=r[0],u=r[1],s=r[2],a=r[3],c=r[4],e=r[5],i=r[6],M=r[7],h=r[8];return o*(h*c-e*M)+u*(-h*a+e*i)+s*(M*a-c*i)}function L(r,o,u){const s=o[0],a=o[1],c=o[2],e=o[3],i=o[4],M=o[5],h=o[6],f=o[7],x=o[8],l=u[0],m=u[1],b=u[2],d=u[3],j=u[4],y=u[5],g=u[6],_=u[7],p=u[8];return r[0]=l*s+m*e+b*h,r[1]=l*a+m*i+b*f,r[2]=l*c+m*M+b*x,r[3]=d*s+j*e+y*h,r[4]=d*a+j*i+y*f,r[5]=d*c+j*M+y*x,r[6]=g*s+_*e+p*h,r[7]=g*a+_*i+p*f,r[8]=g*c+_*M+p*x,r}function G(r,o,u){const s=o[0],a=o[1],c=o[2],e=o[3],i=o[4],M=o[5],h=o[6],f=o[7],x=o[8],l=u[0],m=u[1];return r[0]=s,r[1]=a,r[2]=c,r[3]=e,r[4]=i,r[5]=M,r[6]=l*s+m*e+h,r[7]=l*a+m*i+f,r[8]=l*c+m*M+x,r}function H(r,o,u){const s=o[0],a=o[1],c=o[2],e=o[3],i=o[4],M=o[5],h=o[6],f=o[7],x=o[8],l=Math.sin(u),m=Math.cos(u);return r[0]=m*s+l*e,r[1]=m*a+l*i,r[2]=m*c+l*M,r[3]=m*e-l*s,r[4]=m*i-l*a,r[5]=m*M-l*c,r[6]=h,r[7]=f,r[8]=x,r}function I(r,o,u){const s=u[0],a=u[1],c=u[2];return r[0]=s*o[0],r[1]=s*o[1],r[2]=s*o[2],r[3]=a*o[3],r[4]=a*o[4],r[5]=a*o[5],r[6]=c*o[6],r[7]=c*o[7],r[8]=c*o[8],r}function J(r,o,u){const s=u[0],a=u[1];return r[0]=s*o[0],r[1]=s*o[1],r[2]=s*o[2],r[3]=a*o[3],r[4]=a*o[4],r[5]=a*o[5],r}function K(r,o){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=o[0],r[7]=o[1],r[8]=1,r}function U(r,o){const u=Math.sin(o),s=Math.cos(o);return r[0]=s,r[1]=u,r[2]=0,r[3]=-u,r[4]=s,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function W(r,o){return r[0]=o[0],r[1]=0,r[2]=0,r[3]=0,r[4]=o[1],r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function X(r,o){return r[0]=o[0],r[1]=o[1],r[2]=0,r[3]=o[2],r[4]=o[3],r[5]=0,r[6]=o[4],r[7]=o[5],r[8]=1,r}function Y(r,o){const u=o[0],s=o[1],a=o[2],c=o[3],e=u+u,i=s+s,M=a+a,h=u*e,f=s*e,x=s*i,l=a*e,m=a*i,b=a*M,d=c*e,j=c*i,y=c*M;return r[0]=1-x-b,r[3]=f-y,r[6]=l+j,r[1]=f+y,r[4]=1-h-b,r[7]=m-d,r[2]=l-j,r[5]=m+d,r[8]=1-h-x,r}function Z(r,o){const u=o[0],s=o[1],a=o[2],c=o[4],e=o[5],i=o[6],M=o[8],h=o[9],f=o[10],x=f*e-i*h,l=-f*c+i*M,m=h*c-e*M,b=u*x+s*l+a*m;if(!b)return null;const d=1/b;return r[0]=x*d,r[1]=(-f*s+a*h)*d,r[2]=(i*s-a*e)*d,r[3]=l*d,r[4]=(f*u-a*M)*d,r[5]=(-i*u+a*c)*d,r[6]=m*d,r[7]=(-h*u+s*M)*d,r[8]=(e*u-s*c)*d,r}function n(r,o){const u=o[0],s=o[1],a=o[2],c=o[3],e=o[4],i=o[5],M=o[6],h=o[7],f=o[8],x=o[9],l=o[10],m=o[11],b=o[12],d=o[13],j=o[14],y=o[15],g=u*i-s*e,_=u*M-a*e,p=u*h-c*e,$=s*M-a*i,A=s*h-c*i,F=a*h-c*M,T=f*d-x*b,z=f*j-l*b,q=f*y-m*b,E=x*j-l*d,O=x*y-m*d,v=l*y-m*j;let S=g*v-_*O+p*E+$*q-A*z+F*T;return S?(S=1/S,r[0]=(i*v-M*O+h*E)*S,r[1]=(M*q-e*v-h*z)*S,r[2]=(e*O-i*q+h*T)*S,r[3]=(a*O-s*v-c*E)*S,r[4]=(u*v-a*q+c*z)*S,r[5]=(s*q-u*O-c*T)*S,r[6]=(d*F-j*A+y*$)*S,r[7]=(j*p-b*F-y*_)*S,r[8]=(b*A-d*p+y*g)*S,r):null}function t(r,o,u){return r[0]=2/o,r[1]=0,r[2]=0,r[3]=0,r[4]=-2/u,r[5]=0,r[6]=-1,r[7]=1,r[8]=1,r}function rr(r){return"mat3("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+", "+r[6]+", "+r[7]+", "+r[8]+")"}function or(r){return Math.sqrt(r[0]**2+r[1]**2+r[2]**2+r[3]**2+r[4]**2+r[5]**2+r[6]**2+r[7]**2+r[8]**2)}function ur(r,o,u){return r[0]=o[0]+u[0],r[1]=o[1]+u[1],r[2]=o[2]+u[2],r[3]=o[3]+u[3],r[4]=o[4]+u[4],r[5]=o[5]+u[5],r[6]=o[6]+u[6],r[7]=o[7]+u[7],r[8]=o[8]+u[8],r}function N(r,o,u){return r[0]=o[0]-u[0],r[1]=o[1]-u[1],r[2]=o[2]-u[2],r[3]=o[3]-u[3],r[4]=o[4]-u[4],r[5]=o[5]-u[5],r[6]=o[6]-u[6],r[7]=o[7]-u[7],r[8]=o[8]-u[8],r}function sr(r,o,u){return r[0]=o[0]*u,r[1]=o[1]*u,r[2]=o[2]*u,r[3]=o[3]*u,r[4]=o[4]*u,r[5]=o[5]*u,r[6]=o[6]*u,r[7]=o[7]*u,r[8]=o[8]*u,r}function ar(r,o,u,s){return r[0]=o[0]+u[0]*s,r[1]=o[1]+u[1]*s,r[2]=o[2]+u[2]*s,r[3]=o[3]+u[3]*s,r[4]=o[4]+u[4]*s,r[5]=o[5]+u[5]*s,r[6]=o[6]+u[6]*s,r[7]=o[7]+u[7]*s,r[8]=o[8]+u[8]*s,r}function cr(r,o){return r[0]===o[0]&&r[1]===o[1]&&r[2]===o[2]&&r[3]===o[3]&&r[4]===o[4]&&r[5]===o[5]&&r[6]===o[6]&&r[7]===o[7]&&r[8]===o[8]}function er(r,o){const u=r[0],s=r[1],a=r[2],c=r[3],e=r[4],i=r[5],M=r[6],h=r[7],f=r[8],x=o[0],l=o[1],m=o[2],b=o[3],d=o[4],j=o[5],y=o[6],g=o[7],_=o[8],p=B();return Math.abs(u-x)<=p*Math.max(1,Math.abs(u),Math.abs(x))&&Math.abs(s-l)<=p*Math.max(1,Math.abs(s),Math.abs(l))&&Math.abs(a-m)<=p*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(c-b)<=p*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(e-d)<=p*Math.max(1,Math.abs(e),Math.abs(d))&&Math.abs(i-j)<=p*Math.max(1,Math.abs(i),Math.abs(j))&&Math.abs(M-y)<=p*Math.max(1,Math.abs(M),Math.abs(y))&&Math.abs(h-g)<=p*Math.max(1,Math.abs(h),Math.abs(g))&&Math.abs(f-_)<=p*Math.max(1,Math.abs(f),Math.abs(_))}function ir(r){const o=B(),u=r[0],s=r[1],a=r[2],c=r[3],e=r[4],i=r[5],M=r[6],h=r[7],f=r[8];return Math.abs(1-(u*u+c*c+M*M))<=o&&Math.abs(1-(s*s+e*e+h*h))<=o&&Math.abs(1-(a*a+i*i+f*f))<=o}const Mr=L,hr=N;Object.freeze(Object.defineProperty({__proto__:null,add:ur,adjoint:C,copy:Q,determinant:D,equals:er,exactEquals:cr,frob:or,fromMat2d:X,fromMat4:P,fromQuat:Y,fromRotation:U,fromScaling:W,fromTranslation:K,identity:V,invert:w,isOrthoNormal:ir,mul:Mr,multiply:L,multiplyScalar:sr,multiplyScalarAndAdd:ar,normalFromMat4:n,normalFromMat4Legacy:Z,projection:t,rotate:H,scale:I,scaleByVec2:J,set:R,str:rr,sub:hr,subtract:N,translate:G,transpose:k},Symbol.toStringTag,{value:"Module"}));export{G as M,J as b,C as c,I as f,H as h,L as i,n as j,K as l,P as n,V as o,Y as p,R as r,w as s,k as u,ir as z};
