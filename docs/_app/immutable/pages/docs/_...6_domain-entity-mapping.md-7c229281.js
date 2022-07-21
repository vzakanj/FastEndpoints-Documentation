import{S as Ns,i as Ps,s as ws,l as c,r as o,a as g,w as I,m as y,n as F,u as e,h as n,c as h,x as O,p as es,b as t,M as p,y as S,v as ks,f as x,t as L,B as U,_ as Is,E as Os}from"../../chunks/index-98cfa7ad.js";import{f as Ss}from"../../chunks/scroll-1be19199.js";import{C as Bs}from"../../chunks/CodeFence-182ee1eb.js";import{L as Ms}from"../../chunks/Link-76ffd583.js";import{A as xs}from"../../chunks/Admonition-d261edcb.js";import"../../chunks/singletons-9aa31187.js";import"../../chunks/contexts-ec7bfa4f.js";function Ls(f){let l;return{c(){l=o("#")},l(B){l=e(B,"#")},m(B,r){t(B,l,r)},d(B){B&&n(l)}}}function Us(f){let l;return{c(){l=o("#")},l(B){l=e(B,"#")},m(B,r){t(B,l,r)},d(B){B&&n(l)}}}function Gs(f){let l,B,r,u,m,T,D,d;return{c(){l=c("p"),B=o("Mapper classes are used as "),r=c("strong"),u=o("singletons"),m=o(" for performance reasons."),T=g(),D=c("p"),d=o("You should not maintain state in your mappers.")},l(i){l=y(i,"P",{});var A=F(l);B=e(A,"Mapper classes are used as "),r=y(A,"STRONG",{});var $=F(r);u=e($,"singletons"),$.forEach(n),m=e(A," for performance reasons."),A.forEach(n),T=h(i),D=y(i,"P",{});var C=F(D);d=e(C,"You should not maintain state in your mappers."),C.forEach(n)},m(i,A){t(i,l,A),p(l,B),p(l,r),p(r,u),p(l,m),t(i,T,A),t(i,D,A),p(D,d)},p:Os,d(i){i&&n(l),i&&n(T),i&&n(D)}}}function Hs(f){let l,B=f[0].title+"",r,u,m,T,D,d,i,A,$,C,b,ts,X,E,rs,W,cs,ys,Y,Fs,is,j,As,Cs,Z,P,_,v,Es,ss,R,Ds,z,fs,us,ns,w,G,ms,as,k,q,ds,J,$s,gs,ps,M,K;return $=new Bs({props:{lang:"csharp",ext:"cs",linesCount:23,code:`<pre><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Request</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> Id { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> FirstName { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> LastName { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> BirthDay { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Response</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> Id { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> UserName { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> FullName { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> Age { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> Id { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> FullName { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">DateOnly</span><span style="color: #ABB2BF"> DateOfBirth { </span><span style="color: #C678DD">get</span><span style="color: #ABB2BF">; </span><span style="color: #C678DD">set</span><span style="color: #ABB2BF">; }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}}),b=new Ms({props:{class:"header-anchor",href:"#mapping-logic-in-the-endpoint-class","aria-hidden":"true",$$slots:{default:[Ls]},$$scope:{ctx:f}}}),P=new Bs({props:{lang:"csharp",ext:"cs",linesCount:31,code:`<pre><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">SavePerson</span><span style="color: #ABB2BF"> : </span><span style="color: #E5C07B">EndpointWithMapping</span><span style="color: #ABB2BF">&lt;</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">Response</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">void</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Configure</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">Put</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/api/person&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">AllowAnonymous</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Task</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">HandleAsync</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">CancellationToken</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">c</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">entity</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">MapToEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">r</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Response</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">MapFromEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">entity</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">SendAsync</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">Response</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">MapToEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">) =&gt; </span><span style="color: #61AFEF">new</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Id</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">DateOfBirth</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">DateOnly</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Parse</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">BirthDay</span><span style="color: #ABB2BF">),</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">FullName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">$&quot;{</span><span style="color: #E5C07B">r</span><span style="color: #98C379">.</span><span style="color: #E5C07B">FirstName</span><span style="color: #98C379">} {</span><span style="color: #E5C07B">r</span><span style="color: #98C379">.</span><span style="color: #E5C07B">LastName</span><span style="color: #98C379">}&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Response</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">MapFromEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">) =&gt; </span><span style="color: #61AFEF">new</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Id</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">FullName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">FullName</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">UserName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">$&quot;USR{</span><span style="color: #E5C07B">e</span><span style="color: #98C379">.</span><span style="color: #E5C07B">Id</span><span style="color: #98C379">:</span><span style="color: #D19A66">0000000000</span><span style="color: #98C379">}&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B">DateOnly</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">FromDateTime</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">DateTime</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">UtcNow</span><span style="color: #ABB2BF">).</span><span style="color: #E5C07B">DayNumber</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DateOfBirth</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DayNumber</span><span style="color: #ABB2BF">) </span><span style="color: #56B6C2">/</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">365</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}}),v=new Ms({props:{class:"header-anchor",href:"#mapping-logic-in-a-separate-class","aria-hidden":"true",$$slots:{default:[Us]},$$scope:{ctx:f}}}),w=new Bs({props:{lang:"csharp",ext:"cs",linesCount:18,code:`<pre><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">PersonMapper</span><span style="color: #ABB2BF"> : </span><span style="color: #E5C07B">Mapper</span><span style="color: #ABB2BF">&lt;</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">Response</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">ToEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">) =&gt; </span><span style="color: #61AFEF">new</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Id</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">DateOfBirth</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">DateOnly</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Parse</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">BirthDay</span><span style="color: #ABB2BF">),</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">FullName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">$&quot;{</span><span style="color: #E5C07B">r</span><span style="color: #98C379">.</span><span style="color: #E5C07B">FirstName</span><span style="color: #98C379">} {</span><span style="color: #E5C07B">r</span><span style="color: #98C379">.</span><span style="color: #E5C07B">LastName</span><span style="color: #98C379">}&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Response</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">FromEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">) =&gt; </span><span style="color: #61AFEF">new</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Id</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">FullName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">FullName</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">UserName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">$&quot;USR{</span><span style="color: #E5C07B">e</span><span style="color: #98C379">.</span><span style="color: #E5C07B">Id</span><span style="color: #98C379">:</span><span style="color: #D19A66">0000000000</span><span style="color: #98C379">}&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B">DateOnly</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">FromDateTime</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">DateTime</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">UtcNow</span><span style="color: #ABB2BF">).</span><span style="color: #E5C07B">DayNumber</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">e</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DateOfBirth</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DayNumber</span><span style="color: #ABB2BF">) </span><span style="color: #56B6C2">/</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">365</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    };</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}}),k=new Bs({props:{lang:"csharp",ext:"cs",linesCount:16,code:`<pre><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">SavePerson</span><span style="color: #ABB2BF"> : </span><span style="color: #E5C07B">Endpoint</span><span style="color: #ABB2BF">&lt;</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">Response</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">PersonMapper</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">void</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Configure</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">Put</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/api/person&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">AllowAnonymous</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Task</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">HandleAsync</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">r</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">CancellationToken</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">c</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">entity</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Map</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">ToEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">r</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">Response</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Map</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">FromEntity</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">entity</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">SendAsync</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">Response</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}}),M=new xs({props:{type:"info",$$slots:{default:[Gs]},$$scope:{ctx:f}}}),{c(){l=c("h1"),r=o(B),u=g(),m=c("p"),T=o("For those of us who are not fans of AutoMapper and the like, this library offers a cleaner way to do manual mapping for request DTO to domain entity and back from an entity to a response dto."),D=g(),d=c("p"),i=o("Consider the following request, response and entity classes:"),A=g(),I($.$$.fragment),C=c("h2"),I(b.$$.fragment),ts=o(" Mapping Logic In The Endpoint Class"),X=g(),E=c("p"),rs=o("If you prefer to place your mapping logic in the endpoint definition itself, you can simply use the "),W=c("strong"),cs=o("EndpointWithMapping<TRequest,TResponse,TEntity>"),ys=o(" generic overload to implement your endpoint and override the "),Y=c("strong"),Fs=o("MapToEntity()"),is=o(" and "),j=c("strong"),As=o("MapFromEntity()"),Cs=o(" methods like so:"),Z=g(),I(P.$$.fragment),_=c("h2"),I(v.$$.fragment),Es=o(" Mapping Logic In a Separate Class"),ss=g(),R=c("p"),Ds=o("If your preference is to keep the mapping logic in a class of it's own, you can create a separate mapper inheriting from "),z=c("strong"),fs=o("Mapper<TRequest, TResponse, TEntity>"),us=o(" like so:"),ns=g(),I(w.$$.fragment),G=c("p"),ms=o("To use the above mapper you need to inherit your endpoint from Endpoint**<TRequest, TResponse, TMapper>** generic overload like so:"),as=g(),I(k.$$.fragment),q=c("p"),ds=o("The mapping logic can be accessed from the "),J=c("strong"),$s=o("Map"),gs=o(" property of the endpoint class. that's all there's to it."),ps=g(),I(M.$$.fragment),this.h()},l(s){l=y(s,"H1",{});var a=F(l);r=e(a,B),a.forEach(n),u=h(s),m=y(s,"P",{});var Q=F(m);T=e(Q,"For those of us who are not fans of AutoMapper and the like, this library offers a cleaner way to do manual mapping for request DTO to domain entity and back from an entity to a response dto."),Q.forEach(n),D=h(s),d=y(s,"P",{});var V=F(d);i=e(V,"Consider the following request, response and entity classes:"),V.forEach(n),A=h(s),O($.$$.fragment,s),C=y(s,"H2",{id:!0,tabindex:!0});var H=F(C);O(b.$$.fragment,H),ts=e(H," Mapping Logic In The Endpoint Class"),H.forEach(n),X=h(s),E=y(s,"P",{});var N=F(E);rs=e(N,"If you prefer to place your mapping logic in the endpoint definition itself, you can simply use the "),W=y(N,"STRONG",{});var _s=F(W);cs=e(_s,"EndpointWithMapping<TRequest,TResponse,TEntity>"),_s.forEach(n),ys=e(N," generic overload to implement your endpoint and override the "),Y=y(N,"STRONG",{});var Ts=F(Y);Fs=e(Ts,"MapToEntity()"),Ts.forEach(n),is=e(N," and "),j=y(N,"STRONG",{});var bs=F(j);As=e(bs,"MapFromEntity()"),bs.forEach(n),Cs=e(N," methods like so:"),N.forEach(n),Z=h(s),O(P.$$.fragment,s),_=y(s,"H2",{id:!0,tabindex:!0});var hs=F(_);O(v.$$.fragment,hs),Es=e(hs," Mapping Logic In a Separate Class"),hs.forEach(n),ss=h(s),R=y(s,"P",{});var ls=F(R);Ds=e(ls,"If your preference is to keep the mapping logic in a class of it's own, you can create a separate mapper inheriting from "),z=y(ls,"STRONG",{});var vs=F(z);fs=e(vs,"Mapper<TRequest, TResponse, TEntity>"),vs.forEach(n),us=e(ls," like so:"),ls.forEach(n),ns=h(s),O(w.$$.fragment,s),G=y(s,"P",{});var Rs=F(G);ms=e(Rs,"To use the above mapper you need to inherit your endpoint from Endpoint**<TRequest, TResponse, TMapper>** generic overload like so:"),Rs.forEach(n),as=h(s),O(k.$$.fragment,s),q=y(s,"P",{});var os=F(q);ds=e(os,"The mapping logic can be accessed from the "),J=y(os,"STRONG",{});var qs=F(J);$s=e(qs,"Map"),qs.forEach(n),gs=e(os," property of the endpoint class. that's all there's to it."),os.forEach(n),ps=h(s),O(M.$$.fragment,s),this.h()},h(){es(C,"id","mapping-logic-in-the-endpoint-class"),es(C,"tabindex","-1"),es(_,"id","mapping-logic-in-a-separate-class"),es(_,"tabindex","-1")},m(s,a){t(s,l,a),p(l,r),t(s,u,a),t(s,m,a),p(m,T),t(s,D,a),t(s,d,a),p(d,i),t(s,A,a),S($,s,a),t(s,C,a),S(b,C,null),p(C,ts),t(s,X,a),t(s,E,a),p(E,rs),p(E,W),p(W,cs),p(E,ys),p(E,Y),p(Y,Fs),p(E,is),p(E,j),p(j,As),p(E,Cs),t(s,Z,a),S(P,s,a),t(s,_,a),S(v,_,null),p(_,Es),t(s,ss,a),t(s,R,a),p(R,Ds),p(R,z),p(z,fs),p(R,us),t(s,ns,a),S(w,s,a),t(s,G,a),p(G,ms),t(s,as,a),S(k,s,a),t(s,q,a),p(q,ds),p(q,J),p(J,$s),p(q,gs),t(s,ps,a),S(M,s,a),K=!0},p(s,[a]){(!K||a&1)&&B!==(B=s[0].title+"")&&ks(r,B);const Q={};a&2&&(Q.$$scope={dirty:a,ctx:s}),b.$set(Q);const V={};a&2&&(V.$$scope={dirty:a,ctx:s}),v.$set(V);const H={};a&2&&(H.$$scope={dirty:a,ctx:s}),M.$set(H)},i(s){K||(x($.$$.fragment,s),x(b.$$.fragment,s),x(P.$$.fragment,s),x(v.$$.fragment,s),x(w.$$.fragment,s),x(k.$$.fragment,s),x(M.$$.fragment,s),K=!0)},o(s){L($.$$.fragment,s),L(b.$$.fragment,s),L(P.$$.fragment,s),L(v.$$.fragment,s),L(w.$$.fragment,s),L(k.$$.fragment,s),L(M.$$.fragment,s),K=!1},d(s){s&&n(l),s&&n(u),s&&n(m),s&&n(D),s&&n(d),s&&n(A),U($,s),s&&n(C),U(b),s&&n(X),s&&n(E),s&&n(Z),U(P,s),s&&n(_),U(v),s&&n(ss),s&&n(R),s&&n(ns),U(w,s),s&&n(G),s&&n(as),U(k,s),s&&n(q),s&&n(ps),U(M,s)}}}function Ws(f,l,B){let r;return Is(f,Ss,u=>B(0,r=u)),[r]}class Xs extends Ns{constructor(l){super(),Ps(this,l,Ws,Hs,ws,{})}}export{Xs as default};
