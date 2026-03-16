# ch0

## 0.2

1

(a) $gf(a_1)=gf(a_2)$ => $f(a_1)=f(a_2)$ => $a_1=a_2$ , $gf$ injective  
(b) $f(a_1)=f(a_2)$ => $gf(a_1)=gf(a_2)$ => $a_1=a_2$ , $f$ injective  
(c) $gf(X)=g(Y)=Z$ , $gf$ surjective  
(d) $Z=gf(X)\subset g(Y)$ , $g$ surjective  
(e) $f:N\to N,n\to n+1;\,n\to |n-1|$  
(d) $f$ injective, $g$ surjective

2

the only if parts are clear by ex.1.

if $\alpha$ is injective, choose a fixed $s_0\in S$ , let $\beta(t)=\begin{cases}\alpha^{-1}(t)&t\in\alpha(S)\\ s_0&t\notin\alpha(S)\end{cases}$ , then $\beta\alpha=1_T$ . if $|S|\ne 1$ and $\beta$ is unique, every $t\in T$ is in $\alpha(S)$ , then $\alpha$ is surjective, thus bijective.

if $\alpha$ is surjective, let $\beta(t)=s\in \alpha^{-1}(t)$ by **axiom of choice**, then $\alpha\beta=1_S$ . if $\beta$ is unique, for every $t$ , $|\alpha^{-1}(t)|=1$ , so $\alpha$ is injective, thus bijective.

3  

if $\alpha$ is surjective, it has a right inverse, so $\beta_1\alpha=\beta_2\alpha$ implies $\beta_1=\beta_2$ ; otherwise, let $U=\{1,2\}$ , $\beta_1(t)=1$ , $\beta_2(t)=\begin{cases}1&t\in\alpha(S)\\2&t\notin \alpha(S) \end{cases}$ , then $\beta_1\alpha=\beta_2\alpha$ , $\beta_1\ne\beta_2$ .

if $\alpha$ is injective, it has a left inverse, so $\alpha\beta_1=\alpha\beta_2$ implies $\beta_1=\beta_2$ ; otherwise, pick $s_1\ne s_2$ such that $\alpha(s_1)=\alpha(s_2)$ , let $U=\{1\}$ , $\gamma_1(1)=s_1$ , $\gamma_2(1)=s_2$ , then $\gamma_1\ne \gamma_2$ , $\alpha\gamma_1=\alpha\gamma_2$ .

i.e., **one-sided (invertible <=> cancellable)** for function composition.

4

$t\in \alpha(A\cup B)$ , $t\in \alpha(A)$ or $\alpha(B)$ , so $\alpha(A\cup B)\subset \alpha(A)\cup \alpha(B)$ .  
$\alpha(A)$ and $\alpha(B)\subset \alpha(A\cup B)$ , so $\alpha(A)\cup \alpha(B)\subset \alpha(A\cup B)$ .

$ \alpha(A\cap B)\subset \alpha(A)$ and $\alpha(B)$ , so $\alpha(A\cap B)\subset \alpha(A)\cap \alpha(B)$ .  
$\alpha(A\cap B)\supset \alpha(A)\cap \alpha(B)$ for every $A,B$ if and only if $\alpha$ is injective.

5

if $\alpha$ is injective, $\alpha(A)\cap \alpha(^\sim A)=\varnothing$ , thus $\alpha(^\sim A)\subset ^\sim\alpha(A)$ ;  
if $\alpha$ is surjective, $^\sim\alpha(A)=\alpha(S)-\alpha(A)\subset\alpha(^\sim A)$ .

## 0.3

4

$X\xrightarrow{C} Y\xrightarrow{D}Z\xrightarrow{E}W$  
$(ED)C=\{(x,w)|\exists y,(x,y)\in C,(y,w)\in ED\}=\{(x,w)|\exists y,z,(x,y)\in C,(y,z)\in D,(z,w)\in E\}$  
$=\{(x,w)|\exists z,(x,z)\in DC,(z,w)\in E\}=E(DC)$

$S\xrightarrow{C} T$  
let $1_A=\{(a,a)|a\in A\}$ .  
$C1_S=\{(s,t)|\exists s',(s,s')\in 1_S,(s',t)\in C\}=\{(s,t)|(s,t)\in C\}=C$ ;  
similarly, $1_T C=C$ .

5

(i) $aEa<=>1_S\subset E$  
(ii) $(aEb => bEa)<=>E^{-1}\subset E<=>E^{-1}=E$  
(iii) $(aEb,bEc => aEc)<=>EE \subset E$ , by(i) $<=>EE=E$

6

$(\cup_i A_i)^{-1}=\cup_i A_i^{-1}$ , $B(\cup_i A_i)=\cup_i BA_i$ ,  
consequently, $1_S\subset E$ , $E^{-1}=E$ , $EE=E$ , thus $E$ is an equivalence relation.  

suppose $F$ is an equivalence relation contaning $C$ , then $1_S\subset F$ , $C\cup C^{-1}\subset F$ , and by induction, $(C\cup C^{-1})^n\subset F$ , thus $E\subset F$ .

7

number of binary relations is $2^{n^2}$ .  

denote # of equivalence relations by $C_n$ (the **Bell number**).  
$C_0=1$ , and it's clear that inductively $C_{n+1}=\sum_{k=0}^n \binom{n}{k} C_k$ .

to derive an explicit formula, denote $B(n,k)$ the # of ways to partition $n$ elements into $k$ piles.  
via the principle of inclusion-exclusion, we have $B(n,k)=\frac{1}{k!}\sum_{j=0}^k (-1)^j\binom{k}{j}(k-j)^n$ .  
and note that $C_n=\sum_{k=0}^n B(n,k)$ .

8

$(\beta\alpha)^{-1}(U_1)=\{s\in S|\beta\alpha(s)\in U_1\}=\{s\in S|\alpha(s)\in \beta^{-1}(U_1)\}=\alpha^{-1}(\beta^{-1}(U_1))$ .

9

let $\circ$ denote $\cap$ or $\cup$ .  
$\alpha^{-1}(C\circ D)=\{s|\alpha(s)\in C\circ D\}=\{s|\alpha(s)\in C\}\circ \{s|\alpha(s)\in D\}=\alpha^{-1}(C)\circ \alpha^{-1}(D)$ .

## 0.4

5

A1  
this is true for $x=0$ since $0+(y+z)=y+z=(0+y)+z$ .  
suppose $x+(y+z)=(x+y)+z$ , then $x^+ +(y+z)=(x+(y+z))^+=((x+y)+z)^+=(x+y)^+ +z=(x^+ +y)+z$ . the formula is true by 1st principle of induction.

M2  
The following formulas can be proven in order, by induction:  
$m+0=0$  
$n^+ +m=n+m^+$  
$m+n=n+m$    
$nm^+=nm+n$  
$m0=0$  
$mn=nm$

# ch1

## 1.1

1

$S$ contains a unit iff $|S|=1$ .  

2

$(x_1,x_2)\sim x_1+x_2\sqrt{2}$

3

It's a semigroup, and is a monoid iff the alphabet consists of a single letter.  

It's not a semigroup unless the alphabet consists of a single letter.

4

$(amb)mc=am(bmc)$  
Let $n$ be a unit, then $nm=nm1=1$ , $mn=1mn=1$ , that is, $m$ is invertible; this is sufficient as well.

5

$(ua)b=ab=u(ab)$  
$(au)b=ab=a(ub)$  
$(ab)u=ab=a(bu)$

## 1.2

4

$(a,b)\sim\begin{pmatrix}a&b\\&1\end{pmatrix}$

7

$ab=1$ , $ca=1$ , then $c=c(ab)=(ca)b=b$ .

$a^{-1}=b$ , then $aba=a$ , $ab^2a=1$ .  
Conversely, $ab=(ab)(ab^2a)=(aba)(b^2a)=ab^2a=1$ , $ba=(ab)(ba)=ab^2a=1$ .

Alternatively, $ab^2a=1$ indicates $a$ is invertible, thus cancellable in $aba=a$ .

8

Since $\rho^2=(\rho\alpha)^2=1$ , $\rho\alpha\rho^{-1}=\rho\alpha\rho=\alpha^{-1}$

9

Since $G\ne\varnothing$ , pick $a\in G$ , $1=a^{-1}a\in G$ .  
For every $g,h\in G$ , $g^{-1}=g^{-1}1\in G$ , $gh=(g^{-1})^{-1}h\in G$ .

10

$ab=1_r$ , $bc=1_r$ , then $a=a1_r=abc=1_rc$ , thus $ba=b1_rc=bc=1_r$ .  
$1_ra=aba=a1_r=a$ .

$G$ may not be a group if the condition is left with right, e.g., ex1 of 1.1 .

11

$ax=b$ , $x=a^{-1}b$ ; $ya=b$ , $y=ba^{-1}$ .

Conversely, let $e$ be solution of $ax=a$ . For every $b$ , $ya=b$ is solvable,  $be=yae=ya=b$ , so $e$ is a right unit of $G$ . Similarly, $G$ has a left unit $i$ , but then $e=ie=i$ , $e$ is the unit.  
Since $ax=e$ , $xa=e$ are solvable, every $a$ has a left and a right inverse, hence an inverse.

12

The map $x\to ax$ is injective, hence surjective, which means $ax=b$ is solvable . Same for $ya=b$ . By ex11, $G$ is a group. 

13

Pair $g$ and $g^{-1}$ , since |G| is even, the number of $g$ such that $g=g^{-1}$ is even.

14

Suppose $G$ is the union of two proper subgrups $H$ , $K$ , one can find $h\in H\setminus K$ and $k\in K\setminus H$ , but $hk \notin H\cup K$ , a contradiction.

**Remark**:   
The coverring number $\sigma(G)$ is defined as the minimal number of proper subgroups whose union is $G$ .  
From above we see that for any $G$ , $\sigma(G)\ne 2$ .   
(**Scorza**) $\sigma(G)=3$ iff $G$ has a homomorphic image $C_2\times C_2$ .  
>Proof:  
>Suppose $\sigma(G)=3$ , $G=H_0\cup K_0\cup J_0$ .  
>Let $N=H_0\cap K_0\cap J_0$ , $H=H_0-K_0\cup J_0$ , $K=K_0-J_0\cup H_0$ , $J=J_0-H_0\cup K_0$ , since $\sigma(G)\ne 2$ , $H,K,J\ne \varnothing$ .  
>Let $a\in H_0\cap K_0-J_0$ , $j\in J$ , then $aj\notin H_0\cup K_0\cup J_0$ , which is a contradiction. Therefore, $H_0\cap K_0\subset J_0$ , $H_0\cap K_0=N$ . Symmetrically, $K_0\cap J_0=N$ $J_0\cap H_0=N$ . As a result, $G$ is the disjoint union $N\cup H\cup K\cup J$ .  
>It's clear $HK\subset J$ , $HJ\subset K$ . Let $h\in H$ , then $h^{-1}\in H$ , $h^{-1}J\subset K$ , hence $J\subset hK\subset HK$ . That is , $HK=J$ .  
>By symmetry, $J=HK=KH$ , $H=JK=KJ$ , $K=HJ=JH$ , then $JHK=JJ=KK=HH\subset N$ . Since also $N=h^{-1}hN\subset HH$ , $JHK=N$ .  
>Now the set $S=\{N,H,K,J\}$ is the group $C_2\times C_2$ , and the natural map $G\to S$ a homomorphism onto it.   
>   
>The converse is clear.

15

(i), (ii) are equivalent to the following:

(I) $x\to ax$ and $x\to xa$ are bijections.  
(II) $bc=(bn)(mc)$ whenever $mn=1$ .

Necessity is clear. Suppose (I) and (II) hold:

By (I), every $b$ has a right inverse $c$ , $bc=1$ . Then by (II), $cb=(1c)(b1)=1\cdot 1=1$ .  
Thus every element is invertible.  
Again by (II), $(xy)y^{-1}=(xy)(y^{-1}1)=x1=x$ , $(xy)z=((xy)y^{-1})(yz)=x(yz)$ .  
Thus mult is associative, $G$ is a group.

## 1.3

3

$a_Rb_R=(ba)_R$ , anti_isomorphism.  
Thus $a\to (a^{-1})_R=a_R^{-1}$ isomorphism.

6

Let $M$ be a monoid, $S$ a set, $f$ a surjection $M\to S$ .  
If it's able to have a well-defined mult on $S$ via $f(a)\circ f(b)=f(ab)$ , $S$ is then a monoid, $f$ a homomorphism. 

Bijection $f:a\to 1-a$ , and $(1-a)\circ(1-b)=1-ab$ , which is $f(a)\circ f(b)=f(ab)$ .  

## 1.4

1

It's clear that $A_L\subset C(A_R)$ . Let $f\in C(A_R)$ , $f(a)=f(1a)=f(1)a$ , hence $f\in A_L$ . Therefore, $A_L=C(A_R)$ , similarly $A_R=C(A_L)$ .  
Let $g\in A_L\cap A_R$ , by above, $g(a)=g(1)a=ag(1)$ , thus, $g(1)\in Z$ , $g\in \{L_c|c\in Z\}$ . Then clearly $A_L\cap A_R=\{L_c|c\in Z\}$ .

2

Let $1\ne \sigma\in S_n$ , find $i\ne j$ such that $\sigma(i)=j$ . Since $n\ge 3$ , find $k\ne i,j$ and $\tau$ , $\tau(j)=k$ , $\tau(i)=i$ . Hence, $\tau\sigma(i)=k$ , $\sigma\tau(i)=j$ , $\sigma\notin Z$ . Thus $Z=1$ .

3

$g^2=1$  
$ab=abbaba=aaba=ba$

The set of matrices of the form $\begin{pmatrix}1&*&*\\&1&*\\&&1\end{pmatrix}\in M_3(\mathbb{F}_3)$ is a non-abelian group, where $g^3=1$ for every $g$ .

4

$n=1$ , trivially true. Assume the result for $n$ .  
Suppose $g$ has length $\ge 2^{n+1}$, $g=ab$ , then either $a$ or $b$ has length $\ge 2^{n}$ . In both cases, by induction, $g$ is a simple product of $n+1$ elements.

## 1.5

1

Let $A$ , $B$ be subsets. CLearly, $A\subset CCA$ ; $CA\subset CB$ if $B\subset A$ .  
Hence $C(CCA)\subset CA\subset CC(CA)$ , $CA=CCCA$ .  
$A\subset \langle A \rangle$ , thus $CA\supset C\langle A \rangle$ .  
$A\subset CCA$ , thus $\langle A \rangle\subset CCA$ , thus $CA=CCCA\subset C\langle A \rangle$ .  

Suppose $A\subset CA$ , then $\langle A \rangle \subset CA=C\langle A \rangle$ , hence $M=\langle A \rangle$ is commutative. 

2

$S\subset U(M)\subset M$ , by definition , $M\subset U(M)$ , thus $U(M)=M$ .

3

Let $\{a_1,\cdots,a_r\}$ be the generators, then $|G|\le \prod_i o(a_i)<\infty$ .

4

$o(g)=n$ , it's clear $o(g^k)=[n,k]/k=n/(n,k)$ .  
Thus $g^k$ is a generator of $\langle g \rangle$ iff $o(g^k)=n$ iff $(n,k)=1$ .

5

Let $m$ be the lcm of denominators of the ganerators, clearly $H$ is contained in $\langle1/m\rangle$ , thus a cyclic group itself.  

$\mathbb{Q}\times\mathbb{Q}$ has a finitely generated subgroup which is not cyclic, $\langle(1,0),(0,1)\rangle$ .

6

Let $o(a)=m$ , $o(b)=n$ , $(m,n)=1$ .   
$g\in \langle a\rangle\cap\langle b\rangle$ only if $o(g)|(m,n)$ , thus $g=1$ .  
$\langle ab\rangle\subset \langle a,b\rangle$ , but $|\langle a,b\rangle|\le mn=|\langle ab\rangle|$ .

7

$o(b)=r$ , $o(c)=s$ , $(r,s)=1$ .  
By counting order, $\langle b\rangle\times \langle c\rangle=\langle(b,c)\rangle$ , thus is cyclic of order $rs$ , therefore $\cong \langle a\rangle$ .

## 1.6

2

$(ij)(kl)=(ijl)(kjl)$ , $(ij)(ik)=(ikj)$ , thus the 3-cycles generate $A_n$ .  

Moreover, 3-cycles of the form $(12i)$ are enough:  
$(1ij)=(12j)(21i)$ , $(ijk)=(1ij)(1jk)$ .

3

$(-1)^{(n-1)n/2}$

4

Let $j=\alpha(i)$  
$\alpha(i_1\cdots i_r)\alpha^{-1}(j)=\alpha(i_1\cdots i_r)(i)=\begin{cases}(\alpha(i_1)\cdots\alpha(i_r))(j)&i\in \{i_1,\cdots,i_r\}\\ j&\text{otherwise} \end{cases}$  
$=(\alpha(i_1)\cdots\alpha(i_r))(j)$ .

5
 
$(ij)=(1i)(1j)(1i)$  
$(1i)=(i-1;i)\cdots(23)(12)(23)\cdots(i-1;i)$

Furthermore, $\{(12),(12\cdots n)\}$ works since $(i;i+1)=(12\cdots n)^{i-1}(12)(12\cdots n)^{1-i}$ .

## 1.7

2

For $G$ finite, by Lagrange.  
For general groups, let $G=\bigsqcup_{i\in I}g_iH$ , $H=\bigsqcup_{j\in J}h_jK$ , thus, $[G:H]=|I|$ , $[H:K]=|J|$ . Then it's readily to check $G=\bigcup_{i,j\in I\times J}g_ih_jK$ is disjoint . Therefore, $[G:K]=|I||J|=[G:H][H:K]$ .

3

$g(H_1\cap H_2)=gH_1\cap gH_2$ , which gives an injection $G/(H_1\cap H_2)\xrightarrow{f} G/H_1 \times G/H_2$ , thus  
$[G:H_1\cap H_2]\le [G:H_1][G:H_2]$ .  
In particular, if $H_1$ and $H_2$ have finite index so has $H_1\cap H_2$ .

**Remark**:  
It's easy to show $aH_1\cap bH_2\ne \varnothing$ for every $a,b$ iff $H_1H_2=G$ ; and in case $aH_1\cap bH_2\ne\varnothing$ , $aH_1\cap bH_2=x(H_1\cap H_2)$ for any $x$ in it. Hence the injection $f$ is onto iff $H_1H_2=G$ .  
Therefore, equality holds in $[G:H_1\cap H_2]\le[G:H_1][G:H_2]$ if $H_1H_2=G$ .(in case of finite index, iff $H_1H_2=G$) 

proof 2:  
By ex5 below, $[H_1:H_1\cap H_2]=[H_1H_2:H_2]\le [G:H_2]$ , then apply ex2.

4

Let $[G:H]=m$ , $\{g_1,\cdots,g_m\}$ be representatives of left cosets , where $g_1=1$ .  
Let $G=\langle a_1,\cdots,a_n\rangle$ , inverses included.  
For every $j,k$ , there are $h_{jk}\in H$ , $g_{jk}\in \{g_i\}$ , such that $a_jg_k=g_{jk}h_{jk}$ .  
Then every $g=a_{i_1}\cdots a_{i_r}=a_{i_1}\cdots a_{i_r}g_1=g_{j_1k_1}h_{j_1k_1}\cdots h_{j_rk_r}$ , where $g_{j_1k_1}=1$ if $g\in H$ .  
Hence $H$ is generated by $\{h_{ij}\}$ .

5

The map $h(H\cap J)\to hJ$ is a bijection of $H/(H\cap J)\to HJ/J$ , thus $[H:H\cap J]=[HJ:J]$ .  
With right cosets, $[H:H\cap J]=[JH:J]$ .

Then let $J=xKx^{-1}$, and use Lagrange theorem, in the finite case.

proof 2:  
$H\times K$ acts on $G$ , by $(h,k)(g)=hgk^{-1}$ .  
At $g$ , the stabilizer $\cong H\cap gKg^{-1}$ , the orbit is $HgK$ .  
Hence $|H||K|=|HgK|\cdot |H\cap gKg^{-1}|$ .

**proof 3**:  
$H$ acts on the left cosets $G/K$ , $aK\to haK$ .  
At $xK$ , stabilizer is $H\cap xKx^{-1}$ , orbit is $HxK$ .  
Hence $[H:H\cap xKx^{-1}]=[HxK:K]$ .

6

Since $G=\bigsqcup HxH$ , it's enough to prove the result for each $HxH$ , by hint.

## 1.8

5

If $H$ is normal, then $HK=KH$ .  
Then $HKHK=HHKK=HK$ , $1\in HK$ , $(HK)^{-1}=K^{-1}H^{-1}=KH=HK$ .  
Thus $HK$ is a group.  
If furthermore $K$ is normal, $gHK=HgK=HKg$ , $HK$ is normal.

6

Let $f$ be restriction of $p_1:G\to G_1$ to $H$ .  
$H\triangleleft G$ , so $\text{Im}f\triangleleft G_1$ , $\text{ker}f\triangleleft 1\times G_2\cong G_2$ , thus $\text{Im}f=1$ or $G_1$ , $\text{ker}f= 1$ or $1\times G_2$ .  
Since $H\ne 1,G$ , either $\text{Im}f=1$ , $\text{ker}f=1\times G_2$ , $H\cong G_2$ ,  
or $\text{Im}f=G_1$ , $\text{ker}f=1$ , $H\cong G_1$ .  

Remark:  
Specifically, let $N$ be a normal subgroup of $G$ , $f_1,f_2$ be projections.  
In case either $\text{Im}f_i=1$ , we have $N$ $=1$ , $1\times G_2$ , or $G_1\times 1$ .  
Suppose $\text{Im}f_1=G_1$ , $\text{Im}f_2=G_2$ in what follows.  
If $\text{ker}f_1=1\times G_2$ , $N=G_1\times G_2$ .  
If $\text{ker}f_1=1$ , then also $\text{ker}f_2=1$ . Hence $N=\{(g_1,\phi g_1)|g_1\in G_1\}$ , where $\phi:G_1\to G_2$ is an isomorphism . Subgroups of this kind are normal iff $G$ is Abelian, thus $G\cong p\mathbb{Z}\times p\mathbb{Z}$ , and there are $p-1$ of them.

7, 8

$a\sim a'$ , $a\sim b'$ , imply $ab\sim a'b'$ , is equivalent to say,  
$(a,a'),(b,b')\in R$ , then $(ab,a'b')\in R$ .  
The intersection of equivalence relations is an equivalence relation,  
of submonoids is a submonoid.

9

$\alpha(g_1,g_2)=g_1g_2$ , $\text{Im}\alpha=G_1G_2$ .  
Let $(x_1,x_2)\in G_1\times G_2$ , $x_1x_2=g_1g_2$ , iff $g_1^{-1}x_1=g_2x_2^{-1}\in G_1\cap G_2$ , thus $\alpha^{-1}(g_1g_2)=\{(g_1k,k^{-1}g_2)|k\in G_1\cap G_2\}$ .  
Since there is a bijection between the fibres and $\text{Im}\alpha$ , and all fibres have the same cardinality $|G_1\cap G_2|$ , we have $|G_1||G_2|=|\text{Im}\alpha||G_1\cap G_2|=|G_1G_2||G_1\cap G_2|$ .

(1.7 ex5 proof3 is better)

10

$|A^{-1}g|+|B|=|A|+|B|>|G|$ , thus $A^{-1}g\cap B\ne\varnothing$ , thus $g\in AB$ .

11

Since $G\cong G_L$ , prove the result for $G_L$.  
By hint, let $g\in G$ , $o(g)=2$ . $L_g$ is of order $2$ and has no fixed point , thus it's a product of $k$ transpositions, an odd permutation. Then even permutations in $G_L$ is a subgroup of index $2$ .

Remark:  
Let $G$ be of order $2^kn$ , where $n$ is odd.  
If $G$ contains an element of order $2^k$ , then it has a normal subgroup of index $2^k$ :
>Suppose $o(a)=2^k$ . As above, embed $G$ into $S_{2^kn}$ by translation, the image of $a$ is of type $(2^k)^n$ ,  
>an odd permutation. Let the even permutations be $M$ , then $[G:M]=2$ .  
>$a^2\in M$ , $o(a^2)=2^{k-1}$ . By induction, assume $M$ has a normal subgroup $N$ and  
>$[M:N]=2^{k-1}$ ,  $|N|=n$ . Note $G\triangleright M\triangleright N$ , thus $gNg^{-1}\le M$ , and $NgNg^{-1}\le M$ .  
>Since $|NgNg^{-1}||N\cap gNg^{-1}|=|N||gNg^{-1}|=n^2$ , and $|NgNg^{-1}|$ divides $|M|=2^{k-1}$ ,  
>then must $|N\cap gNg^{-1}|=n$ , that is $gNg^{-1}=N$ , thus $N\triangleleft G$ .

## 1.9

2

Remark:  
$\begin{pmatrix}1&l&k\\&1&m\\&&1\end{pmatrix}$

4

$\text{Aut}C_{\infty}\cong C_2$

$\text{Aut}C_m\cong \text{U}(C_m)$  
Structure of $\text{U}(C_m)$ is a classic result in number theory.

5

$Z(S_3)=1$ , $\text{Inn}S_3\cong S_3/Z(S_3)\cong S_3$  
On the other hand, $\sigma\in \text{Aut}S_3$ permutes the generating set $\{(12),(23),(31)\}$ . Thus $|\text{Aut}S_3|\le 3!$ , and $\text{Aut}S_3=\text{Inn}S_3\cong S_3$ .

**Remark**:  
$\text{Aut}S_n\cong\text{Inn}S_n\cong S_n$ if $n\ne 2$ and $6$ .  
>If $n\ge 3$ , $Z(S_n)=1$ , thus $\text{Inn}S_n\cong S_n$ .  
>Let $\sigma\in \text{Aut}S_n$ , $C(2^k)$ consist elements of type $(2)^k$ , it's a conjugacy class. $\sigma$ preserves order and conjugacy, thus permutes $C(2^k)$ s of same length.   
>
>Now prove $\sigma(C(2^1))=C(2^1)$ whenever $n\ne 6$ :  
>$|C(2^k)|=\frac{n!}{(n-2k)!2^kk!}$ , $1\le k\le n/2$ . $\sigma(C(2^1))=C(2^k)$ only if $|C_1|=|C_k|$ , that is, $\frac{(n-2)!}{(n-2k)!}=2^{k-1}k!$ , equivalently, $\frac{(n-2)!}{(n-k)!}\binom{n-k}{k}=2^{k-1}$ . For $k\ge 4$ , the LHS has an odd factor while the RHS does not. Then directly verify the only solution for $k>1$ is $n=6$ , $k=3$ .  
>
>Threfore if $n\ne 6$ , $\sigma$ maps transpositions to transpositions , this causes $\sigma$ to be inner:  
>It's clear each pair in $\{\sigma(1i)\}_{i>2}$ has a common index. In fact an index common to all, since otherwise $\sigma(1k)=\sigma(1j)\sigma(1i)\sigma(1j)=\sigma((1j)(1i)(1j))=\sigma(ij)$ , a contradiction. Let $f(1)$ be the common one, and $f(i)$ the other in $\sigma(1i)$ , then $f\in S_n$ . Since on the generating set $\sigma(1i)=\sigma(f(1)f(i))$ , $\sigma$ is inner , and therefore $\text{Aut}S_n=\text{Inn}S_n\cong S_n$ .  

$\text{Aut}A_n\cong\text{Inn}S_n\cong S_n$ if $n\ne 2$ , $3$ and $6$ . 
>If $n>3$ , $C_{S_n}(A_n)=1$ , via restriction, have an embedding $\text{Inn}S_n\cong\text{Inn}S_n|_{A_n}\subset \text{Aut}A_n$ .  
>Now prove $\text{Aut}A_n\subset\text{Inn}S_n|_{A_n}$ for $n\ne 6$ . Let $\rho\in \text{Aut}A_n$ .  
>
>For $n<6$ , it's clear $\rho(C(3^1))=C(3^1)$ .  
>For $n>4$ , $C(3^k)$ is still a single conjugacy class in $A_n$ , $|C(3^k)|=\frac{n!}{(n-3k)!3^kk!}$ , $1\le k\le n/3$.  
>$|D_1|=|D_k|\to\frac{(n-3)!}{(n-2k)!}\binom{n-2k}{k}=3^{k-1}\to n=6$ , $k=2$ . Hence $\rho(C(3^1))=C(3^1)$ if $n\ne 6$ .  
>
>Note $o((12i)(12j))=2$ , $o((12i)(21j))=3$ , $o((1ij)(1kl))=5$ , conclude $\rho$ acts on two 3-cycles by renaming indexes. Thus $\rho(12i)$ and $\rho(12j)$ have a common ordered index-pair, which foreces all $\rho(12i)$ s to have the same one. Thus $\rho(12i)=(f(1)f(2)f(i))$ for some $f\in S_n$ . Since $\{(12i)\}$ is a generating set, conclude $\rho\in \text{Inn}S_n|_{A_n}$ , and in summary, $\text{Aut}A_n\cong\text{Inn}S_n\cong S_n$ .

$\text{Aut}A_6\cong \text{Aut}S_6\cong \text{Inn}S_6\rtimes C_2$
>If there's $\sigma\in \text{Aut}S_6$ not inner, it swaps $C(2^1)$ and $C(2^3)$ , thus products of 2 outers is inner.  
>Hence $[\text{Aut}S_6:\text{Inn}S_6]\le2$ , similarly $[\text{Aut}A_6:\text{Inn}S_6]\le2$ .
>
>If $n\ge 5$ , by simplicity of $A_n$ , normals of $S_n$ are $1$ , $A_n$ , $S_n$ , hence a transitive action of $S_n$ on $m>2$ objects induces an embedding $S_n\to S_m$ .  
>$S_5$ has $4!$ elements of order $5$ , thus has $6$ groups of order $5$ ; by Sylow's , $S_5$ acts transitively on them via conjugation , thus isomorphic to a transitive subgroup $K$ of $S_6$ . Then let $S_6$ act on left cosets of $K$ , this gives a $\sigma\in\text{Aut}S_6$ that maps the transitive $K$ to a subgroup with a fixed index, and hence $\sigma$ is not inner.  
>
>$A_n$ is the only index 2 subgroup of $S_n$ (if $n\ge 3$ , $(ijk)=(jik)^2\in$ that group), thus we have a homomorphism $\text{Aut}S_n\to \text{Aut}A_n$ by restriction. Suppose $\sigma\in \text{Aut}S_6$ that's the identity map on $A_6$ , let $\alpha=(12)$ . Then for any $\beta\in A_6$ , $\alpha\beta\alpha^{-1}\in A_6$ , $\alpha\beta\alpha^{-1}=\sigma(\alpha\beta\alpha^{-1})=\sigma(\alpha)\beta\sigma(\alpha)$ , thus $\sigma(\alpha)\alpha^{-1}\in C_{S_6}(A_6)=1$ , and $\sigma(\alpha)=\alpha$ . Since $\alpha A_6\cup A_6=S_6$ , conclude $\sigma=1$ . Thus embedded $\text{Aut}S_6$ into $\text{Aut}A_6$ .  
>
>In summary, $\text{Aut}S_6\cong \text{Aut}A_6$ , $[\text{Aut}S_6:\text{Inn}S_6]=2$ .  
>By multiplying inner ones, get an outer $\sigma$ acts on $\{(12),(13),(14),(15),(16)\}$ as $\sigma(1i)=(1i)(**)(**)$ , there are $6!/5!=6$ outers of this type. But the relations $\sigma(1i)\sigma(1j)\ne\sigma(1j)\sigma(1j)$ rules out all but 6 possiblities, which thus must be legal outers. One of them is  
>$(12)\to(12)(34)(56)$ , $(13)\to(13)(45)(26)$ , $(14)\to(14)(25)(36)$ ,  
>$(15)\to(15)(23)(46)$ , $(16)\to(16)(24)(35)$ .  
>It's readily to check this outer has order $2$ (by accident) , thus $\text{Aut}S_6\cong\text{Inn}S_6\rtimes C_2$ .

6

Remark: If $Z=1$ , we can identify $G$ and $\text{Inn}G$ . Let $\sigma\in \text{Aut}G$ then $\sigma(g)\sim \sigma I_g \sigma^{-1}$.

7

$G_L\text{Aut}G=\text{Aut}G G_L$ , thus it's a subgroup.  
$a_R=a_L I_{a^{-1}}\in G_L \text{Aut}G$ , thus $G_R\in G_L \text{Aut}G$ .  
If $G$ is finite, $|\text{Hol}G|=|G_L||\text{Aut}G|/|G_L\cap\text{Aut}G|=|G||\text{Aut}G|$ .

8

$\text{Aut}G=1$ , $\text{Inn}G=1$ , thus $G$ is Abelian , and $a\to a^{-1}$ is teh identity map , thus $a^2=1$ .  
Therefore $G$ is a vector space over $\mathbb{Z}/2\mathbb{Z}$ , and automorphisms are invertible linear maps. Only dim = 0 or 1 is valid.

9

$\alpha(a)a^{-1}=\alpha(b)b^{-1}$ , $\to\alpha(b^{-1}a)=b^{-1}a$ , $\to a=b$ .  
On a finite set this map is also surjective.

10

(should be as in ex9)

$b=\alpha(a)a^{-1}$ , thus $\alpha(b)=a\alpha(a)^{-1}=b^{-1}$ ; since $\alpha$ is homomorphic, $G$ is Abelian.  
$G$ fixex only $1$ , thus $b\ne b^{-1}$ if $b\ne 1$ , thus no element is of order $2$ , thus $|G|$ odd.

11

$|I|>\frac{3}{4}|G|$  
For $a\in I$ , Let $K_a=I\cap a^{-1}I$ . For $k\in K_a$ , $(ak)^{-1}=\alpha(ak)=\alpha(a)\alpha(k)=a^{-1}k^{-1}$ , thus $ak=ka$ , thus $K_a\subset C(a)$ . $|K_a|>\frac{1}{2}|G|$ , thus $C(a)=G$ . Again $|I|>\frac{3}{4}|G|$ , thus $G=Z$ .

$|I|=\frac{3}{4}|G|$  
There must exist $b\in I$ , that $C(b)\ne G$ , otherwise $G$ is Abelian, $I$ is a subgroup, and $|I|=|G|$ .  
Then as above, $K_b=C(b)$ is of index $2$ , and since $K_b\subset I$ , it's Abelian.

E.g., on the group $Q_8$ , take $\alpha=I_i$ .

## 1.10

1

$n\in\mathbb{Z}l\cap \mathbb{Z}k$ <=> $l|n$ and $k|n$ <=> $[l,k]|n$ <=> $n\in\mathbb{Z}[l,k]$ .

$\mathbb{Z}l+\mathbb{Z}k$ is a subgroup of $\mathbb{Z}$ , therefore $=\mathbb{Z}d$ .  
$d=sl+tk$ , $d|l$ , $d|k$ , thus $d=(l,k)$ .

2

$\bigcap (H_\alpha/K)=\eta\eta^{-1}\bigcap (H_\alpha/K)=\eta\bigcap\eta^{-1}(H_\alpha/K)=\eta\bigcap H_\alpha K=\eta\bigcap H_\alpha=(\bigcap H_\alpha)/K$ . 

Remark:  
$\eta:G\to G'$  
$\eta^{-1}\eta M=M\text{ker}\eta$  
$\eta\eta^{-1}N'=N'\cap \text{im}\eta$  
Thus in case of epimorphism, $\eta$ induces 1-1 correspondence:  
$G$-subgroups ( $\supset \text{im}\eta$ ) $\sim$ $G'$-subgroups. 

## 1.11

1

$g^{-1}Sg\subset S\subset \langle S\rangle$ , => $S\subset g\langle S\rangle g^{-1}$ , => $\langle S\rangle\subset g\langle S\rangle g^{-1}$ , thus $\langle S\rangle$ is normal.

$g\to gh$ is a bijection, thus $h^{-1}Sh=\bigcup_{g\in G}(gh)^{-1}Sgh=\bigcup_{g\in G}g^{-1}Sg=S$ , by above, $\langle S\rangle\triangleleft G$ .  
$T\subset S$ , thus $\langle T\rangle _N\subset \langle S\rangle$ ; $S\subset \langle T\rangle _N$ , thus $\langle T\rangle _N\supset \langle S\rangle$ .

2

Let $G'\ni y_1=(0,0,1)$ , $y_2=(0,1,0)$ , $y_3=(1,0,0)$ .    
This is a generating set for $G'$ , for $y_3^m y_1^n y_2^k=(m,k,n)$ ; and they satisfy the realtions of $x_i$ s.  
Thus there's an epimorphism $\phi:G\to G'$ that maps $x_i\to y_i$ .  
With the relations, every elements in $G$ is of the form $x_3^mx_1^nx_2^k$ , which $\xrightarrow{\phi}(m,k,n)$ , therefore $\phi$ is injective.

Remark: ...

3

Let $y_i=(1;i+1)$ , then $y_i$ s satisfy relations of the $x_i$ s.  
This yields epimorphism $G=FG^{(n)}/N\to S_n$ , moreover it's an isomorphism if $|G|\le n!$ .  

Let $g\in G$ .  
By $x_i^2=1$ , make $g$ a product of $x_i$ s, where adjacents are distinct.  
By the other 2 relations, $x_kx_ix_k=x_ix_kx_i$ , $x_jx_ix_k=x_ix_kx_ix_jx_i$ . Thus ( use induction on position of the last $x_{n-1}$ ) we can make $g=ax_{n-1} h$ , where $h\in \langle x_1,\cdots,x_{n-2}\rangle$ , $a\in\{1,x_1,\cdots,x_{n-1}\}$ .  
By induction, conclude $|G|\le n!$ .

4

As above, every $g\in G$ is of the form $ah$ , where $h\in \langle x_1,\cdots,x_{n-2}\rangle$ , $a$ a successive product $x_k\cdots x_{n-1}$ of length within $0$ to $n-1$ . Thus $|G|\le n!$ .

5

Let $y_i=(12)(i+1;i+2)$ , since $\{(12i)\}$ generates $A_n$ , $\{y_i\}$ generates $A_n$ . Then $x_i\to y_i$ works.

As above, every $g\in G$ is of the form $ah$ , where $h\in \langle x_1,\cdots,x_{n-3}\rangle$ ;  
$a$ is one of the $n$ choices, $1$ , $x_1^2x_2\cdots x_{n-2}$ , $x_k\cdots x_{n-2}$ , $1\le k\le n-2$ .  
At $n=3$ , $|G|=3!/2$ , by induction , $|G|\le n!/2$ .

## 1.12

2

sum 120  
5 --- 24  
41 --- 30  
32 --- 20  
311 --- 20  
221 --- 15  
2111 --- 10  
11111 --- 1  
Order should divide 120.  
Should consists of conjugacy classes.  
Should contain 1.  
If all even, order should divide 60 ; otherwise half even.

Then the only nontrivial combination is 11111+5+221+311, which is $A_5$ .

3

The formula $n!/(\prod q_i!\prod n_j)$ is self-evident.

Now consider $p(n)$ :
>Note $\frac{1}{1-x^k}=1+x^k+x^{2k}+\cdots$  
>thus $\prod_1^\infty \frac{1}{1-x^k}=\sum_0^\infty p(n)x^n$  
>Via **Euler's identity** $\prod_1^\infty (1-x^k)=\sum_{-\infty}^{+\infty} (-1)^kx^{k(3k-1)/2}$  
>get $\sum_0^\infty p(n)x^n \sum_{-\infty}^{+\infty} (-1)^kx^{k(3k-1)}=1$  
>Counting coefficient of $x^n$ yields a recurrence relation:  
>$\sum (-1)^k p(n-k(3k-1)/2)=0$ , where the sum is over all $k$ that $n-k(3k-1)/2\ge 0$  
>e.g., $n=12$ , $p(12)-p(11)-p(10)+p(7)+p(5)-p(0)=0$

4

This induces a homomorphism $f:G\to S_n$ , $\text{ker}f\subset H$ .   
Via $G/\text{ker}f\cong \text{im}f$ , conclude $n|[G:\text{ker}f]|n!$ .

5

By ex4, $p|[G:\text{ker}f]|p!$ , but $|G|$ does not have factor $<p$ , thus $p|[G:\text{ker}f]|p$ , $[G:\text{ker}f]=p$ .  
Hence $[H:\text{ker}f]=[G:\text{ker}f]/[G:H]=1$ , $H=\text{ker}f\triangleleft G$ .

6

$|Z|\ge p$ for $p^k$-groups. Suppose  $x\in G-Z$ , then $|Z(x)|\ge p+1$ , thus $Z(x)=G$ , $x\in Z$ , a contradiction . Therefore $Z=G$ .

$G\cong C_{p^2}$ or $C_p\times C_p$ .

7

Let $G$ act on the set of all subgroups by conjugation. $H\subset\text{Stab}H$ , thus the orbit of $H$ has cardinality $\le [G:H]$ . Since $H\cap gHg^{-1}\ne \varnothing$ , $|\bigcup gHg^{-1}|<|H||\text{Orb}H|\le|G|$ .

**Corollary**: No proper subgroup of a finite group intersects all the conjugacy classes.

Not true for Infinite groups, e.g., let $G=\text{GL}_n(\mathbb{C})$ , $H$ be the upper triangular ones.

9

$((k_1,h_1)(k_2,h_2))(k_3,h_3)=(k_1(h_1k_2),h_1h_2)(k_3,h_3)=(k_1(h_1k_2)(h_1h_2k_3),h_1h_2h_3)$  
$=(k_1h_1(k_2(h_2k_3)),h_1h_2h_3)=(k_1,h_1)(k_2(h_2k_3),h_2h_3)=(k_1,h_1)((k_2,h_2)(k_3,h_3))$ .

$(1,1)(k,h)=(1(1k),1h)=(k,h)=(k(h1),h1)=(k,h)(1,1)$ .

$(k,h)(h^{-1}k^{-1},h^{-1})=(1,1)=(h^{-1}k^{-1},h^{-1})(k,h)$ .

Thus it's a group under the binary composition.

$(1,h_1)(1,h_2)=(1(h_11),h_1h_2)=(1,h_1h_2)$ , thus $h\to (1,h)$ is a monomorphism.  
$(k_1,1)(k_2,1)=(k_1(1k_2),1)=(k_1k_2,1)$ , thus $k\to (k,1)$ is monomorphism.

$(k,h)(k',1)(h^{-1}k^{-1},h^{-1})=(k(hk')k^{-1},1)\in K\times 1$ , thus $K\times 1\triangleleft K\times H$ .

**Remark**:  
$(1,h)(k,1)(1,h^{-1})=(hk,1)$  (@.@ )   

Examples:  
Trivial action gives direct product.  
$G\rtimes_\ \text{Aut}G$ with the natural action $\cong\text{Hol}G=G_L \text{Aut}G$ .  

10

$1f(s)=f(1^{-1}s)=f(s)$ .  
$(h_1h_2)f(s)=f(h_2^{-1}h_1^{-1}s)=h_2f(h_1^{-1}s)=h_1(h_2f)(s)$ .  
$h(f_1f_2)(s)=f_1f_2(h^{-1}s)=f_1(h^{-1}s)f_2(h^{-1}s)=hf_1(s)hf_2(s)=(hf_1hf_2)(s)$ .  
Thus $H$ acts on $G^S$ by automorphism.

11

The action should be $(f,h)(s,t)=(f(hs)t,hs)$ .  
( Or modify the semi-direct multiplication to be $(f_1,h_1)(f_2,h_2)=((h_2^{-1}f_1)f_2,h_1h_2)$ ,  
which is isomorphic to the original one via $(f,h)\to(hf,h)$ ).

$(1,1)(t,s)=(1(1s)t,1s)=(t,s)$ .  
$((f_1,h_1)(f_2,h_2))(t,s)=(f_1(h_1f_2),h_1h_2)(t,s)=((f_1(h_1h_2s)f_2(h_2s))t,(h_1h_2)s)$  
$=(f_1(h_1h_2s)(f_2(h_2s))t,h_1(h_2s))=(f_1,h_1)(f_2(h_2s),h_2s)=(f_1,h_1)((f_2,h_2)(t,s))$ .

12

Let $A\subsetneq S$ , $|A|\ge 2$ , let $a$ , $b\in A$ , $c\notin A$ .  
Assume 2-fold transitivity, $(a,b)\xrightarrow{g} (a,c)$ , then $A\ne gA$ , $A\cap gA\ne \varnothing$ . Since $A$ is arbitrary, action is primitive.

The converse is not true, for, let $C_3$ acts on $\{1,2,3\}$ .

13

In case of $G=1$ , $|S|=2$ , the conclusion is vacuously true. Otherwise primitivity implies transitivity, so equivalently $G$ acts on $G/K$ . Since the action is primitive and effective, $K$ is maximal and contains no nontrivial normal subgroup of $G$ . Therefore $H\not\subset K$ , $HK=G$ , thus $H$ acts transitively.

proof 2:  
It's clear $H\ne 1$ also acts effectively, thus there's $s\in S$ , $|Hs|>1$ .  
$H\triangleleft G$ , thus $gHs=H(gs)$ , and either $Hs=gHs$ or $Hs\cap gHs=\varnothing$ .  
$G$ acts primitively, thus $Hs=S$ , $H$ acts transitively. 

## 1.13

**1**

$P$ $\text{char}$ $N(P)$ , $N(P)\triangleleft N(N(P))$ , thus $P\triangleleft N(N(P))$ , $N(N(P))\subset N(P)$ .

**2**

$148=2^2 37$  
$\# 37$ divides $2^2$ and $\equiv 1 \pmod {37}$ , thus $=1$ .

$56=2^3 7$  
$\# 7$ diveds $2^3$ and $\equiv 1 \pmod {7}$ thus $=1$ or $8$  
If $\# 7=8$ , there are $48$ elements of order $7$ , thus $\# 2=1$ .

**3**

WLOG, $p\le q$ . By Cauchy's theorem, there's a subgroup of order $q$ , index $p$ . By p77 e5 , it's normal.

proof 2:  
If $p=q$ , abelian, thus not simple.  
Suppose $p>q$ , by Sylow's, $\# p=1$ .

**Remark**:  
orders that imply **non-simple**. (p, q denote primes) 


$p^k$ for $k\ge 2$
>It has a nontrivial center.

$2(2n+1)$
>By 1.8 ex11, it has an index 2 subgroup.

$p^kn$ , where $n!<p^kn$
>Act on cosets of a Sylow-p subgroup, has a nontrivial kernel.

$p^mq^n$
>By **Burnside's $p^aq^b$ theorem**, the group is solvable, thus not simple.  
>Now prove some special cases with Sylow's theorems.  
>
>$p^mq$  
>**Lemma1** Proper subgroup of a p-group has strictly larger normalizer. (use translation on cosets to prove.)  
>By Sylow's, $\# p=1$ , $q$ . If $1$ , not simple. Suppose $\#p=q$ .  
>Let $P_i$ be the $q$ Sylow-p subgroups. WLOG, suppose $|P_1\cap P_2|$ is maximal among all.   
>If $|P_1\cap P_2|=1$ , counting elements leads to $\#q=1$ , thus not simple.  
>Then suppose $|P_1\cap P_2|>1$ .  
>By lemma1, $P_1\cap P_2$ is proper in $N_{P_1}(P_1\cap P_2)$ and $N_{P_2}(P_1\cap P_2)$ .  
>If $N(P_1\cap P_2)$ is a p-group, then it's in some $P_i$ , $i>2$ , and   
>$P_1\cap P_2\subsetneq N_{P_1}(P_1\cap P_2)=N(P_1\cap P_2)\cap P_1\subset P_i\cap P_1$ , contradicts maximality.  
>Thus $q$ divides $|N(P_1\cap P_2)|$ , $p^mq$ divides $|P_1N(P_1\cap P_2)|$ , and $G=P_1N(P_1\cap P_2)$ .  
>Hence for every $g\in G$ , $g(P_1\cap P_2)g^{-1}\subset P_1$ ; similarly, $g(P_1\cap P_2)g^{-1}\subset P_2$ .  
>Thus $g(P_1\cap P_2)g^{-1}\subset P_1\cap P_2$ , and $P_1\cap P_2$ is nontrivially normal.  
>
>$p^2q^k$ , where $q>p$  
>$k=1$ reduces to the above case; now suppose $k>1$ .  
>By Sylow's, $\# q =1$ , $p^2$ . Suppose it's $p^2$ , $\ni P_1$ , $P_2$ .  
>By |$P_1\cap P_2|=|P_1||P_2|/|P_1P_2|$ , conclude $|P_1\cap P_2|=q^{k-1}$ , $|P_1P_2|=q^{k+1}$ .  
>Then $P_1\cap P_2$ normal in $P_1$ and $P_2$ , thus $N(P_1\cap P_2)\supset P_1P_2$ .  
>Then by order, $N(P_1\cap P_2)= G$ , and $P_1\cap P_2\triangleleft G$ .

$p_1p_2\cdots p_k$  
>**Burnside's transfer theorem**  (*)  
>Let $P$ be a Sylow-p subgroup of a finite group $G$ . If $P\subset Z(N(P))$ ,  
>then there's a normal subgroup $N$ of index $p_1$ , such that $G=N\rtimes P$ .  
> 
>WLOG, $p_1<p_2<\cdots p_k$ .  
>Let $P_1$ be a Sylow-p_1 subgroup, **then $N(P_1)/Z(P_1)$ is a subgroup of $\text{Aut}P_1$** , which has order $p_1-1$ , thus $N(P_1)=Z(P_1)$ . By (*) , there's a normal subgroup $N$ of index $p_1$ .  
>This already proves $G$ is not simple.  
>Moreover, since Sylow-ps are conjugate, all other Sylow-ps are in $N$ . Repeat the above process for $N$, get a chain $N=N_1\triangleright N_2\triangleright \cdots \triangleright N_{k-1}$ , where $N_i$ is of index $p_1\cdots p_i$ , and contains all Sylow-$p_j$ for $j>i$ . Thus conclude there is only one Sylow-$p_k$ subgroup, $N_{k-1}$ .
>  
>Prove a special case directly:  
>$pqr$  
>Suppose $p<q<r$ , and none of $\#r$ , $\#q$ , $\#p$ is $1$ .  
>Then $\#r=pq$ , $\#q=r$ or $pr$ , $\#p=q$ , $r$ , or $qr$ .  
>$\#$ (elements of order r) $=(r-1)pq$ .  
>$\#$ (elements of order q) is at least $=(q-1)r$ .  
>$\#$ (elements of order p) is at least $=(p-1)q$ .  
>They add up to $S=pqr+(q-1)(r-1)-1$ , note that $r>q>2$ , thus $S>pqr-1$ ,  
>but this is impossible.

**4**

It has Sylow-p subgroups $P_2$ , $P_3$ , and $P_3\triangleleft G$ .  
If also $P_2\triangleleft G$ , then $G\cong P_2\times P_3\cong C_6$ abelian.  
Otherwise let $G$ act on cosets of $P_2$ , induces a homomorphism $f:G\to S_3$ ,   
$\text{ker}f$ is the largest normal subgroup of $G$ contained in $P_2$ , which is $1$ . Thus $G\cong S_3$ .

Remark:  
non-abelians of order 12  
>If $\#3=4$ , let $G$ act on cosets of $P_3$ , $f:G\to S_4$ is injective, $G\cong A_4$ .  
>
>Else $\#3=1$ , $P_3\triangleleft G$ , $G\cong P_3\rtimes P_4\cong \langle a\rangle\rtimes P_4$ , $a^3=1$ .   
>If $P_4\cong C_4$ , $=\langle b\rangle$ , act by $\phi: C_4\to \text{Aut}C_3$ , the only nontrivial one is $b(a)=a^2$ .  
Then $G$ has presentation $\langle a,b|a^3,b^4,bab^{-1}a\rangle$ .  
>
>Else $P_4\cong C_2\times C_2$ . For the nontrivial action, can find its two generators $b$ , $c$ ,  
>such that $b(a)=a$ , $c(a)=a^2$ . Then $G\cong (C_3\rtimes\langle c\rangle)\times \langle b\rangle\cong S_3\times C_2$ . 

group of order 24 with trivial center is $S_4$  
>If $\#3=4$ , let $G$ act on cosets of $N(P_3)$ , gives $f:G\to S_4$ , $\text{ker}f$ is the largest normal of $G$ in $N(P_3)$ .  
>Note $|N(P_3)|=6$ . It's clear $|\text{ker}f|\ne 6$ , $3$ . If $|\text{ker}f|= 2$ , then it's in the center, contradicts.  
>Thus $|\text{ker}f|=1$ , and $G\cong S_4$ .  
>
>Otherwise $\#3=1$ , $G\cong C_3\rtimes P_2$ .  
>$P_2$ act via $\phi:P_2\to \text{Aut}C_3\cong C_2$ , clearly $\text{ker}\phi\cap Z(P_2)\subset Z(G)=1$ .  
>$|P_2|=8$ , thus $|Z(P_2)|\ge 2$ , $|\text{ker}\phi|\ge 4$ , thus $P_2=\text{ker}\phi\times Z(P_2)$ , which has a larger center.  
>The contradiction implies this case is not valid.

**5**

Suppose $|G|=pq$ , $p<q$ , and $p \nmid q-1$ .

By Sylow's, $\#p=\#q=1$ , both normal, thus $G\cong C_p\times C_q\cong C_{pq}$ .  

**6**

$o(u)=o(v)=2$ . $G$ finite, so suppose $o(uv)=n$ , then $u(uv)u^{-1}=vu=(uv)^{-1}$ .  
Thus there's a homomorphism $f:D_{2n}=\langle x,y|x^2,y^n,xyxy\rangle\to G$ that $x\to u$ , $y\to uv$ .

Since $G=\langle u,v\rangle=\langle u,uv\rangle$ , $f$ is surjective.  

Every element in $G$ can be written as $u^i(uv)^j$ , $0\le i\le 1$ , $0\le j\le n-1$ .  
Let $u^i(uv)^j=u^l(uv)^k$ , then $u^{i-l}=(uv)^{k-j}$ .  
If $i\ne l$ , then $u=(uv)^{k-j}$ commutes with $uv$ , which leads to $u=1$ or $v=1$ , a contradiction.  
Thus $i=l$ , and hence $j=k$ . Conclude $|G|=2n$ , $f$ is injective.

**7**

$(uv)^{2k+1}=1$ , then $(uv)^ku(uv)^{-k}=(uv)^ku(vu)^k=v$ .

Conversely, if $u$ and $v$ are conjugate in $\langle u,v\rangle$ ( not G ) , reducing $xux^{-1}=v$ via $u^2=v^2=1$ will lead to a relation $(uv)^{2j+1}=1$ , means $uv$ has odd order. 

**8**

$u(uv)^n=u(uv)^{-n}=u(vu)^n=(uv)^nu$ , similar for $v$ .

**9**

Let $U_i$ be the conjugacy class of $u_i$ , for $(x,y)\in U_1\times U_2$ , $o(x)=o(y)=2$ , and $x$ , $y$ not conjugate .  
Thus By ex7 , let $o(xy)=2n$ , then $o((xy)^n)=2$ , $(xy)^n\in U_i$ for some $i$ .  
Thus $f:(x,y)\to (xy)^{o(xy)/2}$ is a map from $A$ to $U_1\cup U_2$ . Fibres within each $U_i$ are conjugate in $G\times G$ , thus have equal cardinality, then $|U_1\times U_2|=|f^{-1}(u_1)||U_1|+|f^{-1}(u_2)||U_2|$ .

Note the condition $u_i=(xy)^n$ for some $n$ is equivalent to $u_i=(xy)^{o(xy)/2}$ since a cyclic group has only one involution, thus $|f^{-1}(u_i)|=|s_i|$ . The formula is then  $\frac{|G|}{c_1}\frac{|G|}{c_2}=s_1\frac{|G|}{c_1}+s_2\frac{|G|}{c_2}$ .

**10**

(i)  
$2\mid|G|$ , let $P_2$ be a Sylow-2 subgroup, there's an involution $a$ in its center, then $P_2\subset C(a)$ .  
Since $C(a)$ is conjugate to either $C_1$ or $C_2$ , it's clear $|P_2|=|C_2|$ .  
(ii)  
$u_1$ is in a Sylow-2 subgroup, which must be conjugate to $C_2$ , thus repalce $u_1$ with a conjugate in $C_2$ .  
After renaming, $C(u_1)\cong \langle u_1\rangle\times S_3$ still holds, and $u_1\in C_2$ , $u_2\in C_1$ .  
(iii)  
By ex8,ex9, the $x,y$ corresponding to $u_i$ necessarily $\in C_i$ .  
$C_2\cong D_4$ has three classes of involutions, $\{u_2\}$ , $\{u_1,u_1u_2\}$ , $\{v,vu_2\}$ .  
The conjugacy relation in $G$ is either $\{u_2\}$ , $\{u_1,u_1u_2,v,vu_2\}$ , then $s_2=0$ ;  
or $\{u_2,v,vu_2\}$ , $\{u_1,u_1u_2\}$ , then $s_2=4$ , and $\{1,u_2,v,vu_2\}$ is the group $V$.  
(iv)  
$C_1\cong \langle u_1\rangle\times S_3$ has three classes of involutions, $\{u_1\}$ , $\{u_1(12),u_1(23),u_1(31)\}$ , $\{(12),(23),(31)\}$ .  
Since $u_2\in C_1$ , the conjugacy relation in $G$ is $\{u_1,u_1(12),u_1(23),u_1(31)\}$ , $\{(12),(23),(31)\}$ ,  
or $\{u_1(12),u_1(23),u_1(31)\}$ , $\{u_1,(12),(23),(31)\}$ . Both cases yield $s_1=9$ .  
(v)  
By ex10, $|G|=s_1c_2+s_2c_1=9\cdot 8+s_2\cdot 12=72$ or $120$ , according to $s_2=0$ or $s_2=4$ .  
(vi)  
$72=2^3 3^2$ , $|Q|=9$ . It's clear $C_1,Q\subset N(P)$ , so $\langle C_1,Q\rangle\subset N(P)$ , and $36=[12,9]$ divides $|N(P)|$ .  
$N(P)/C(P)\le \text{Aut}P$ , thus $[N(P):C(P)]\le 2$ .  
$C_1\not\subset C(P)$ , thus $C(P)\ne G$ .  
Thus if $|N(p)|=72$ , $|C(P)|=36$ , let $H=C(P)$ ; otherwise $|N(P)|=36$ , let $H=N(P)$ .  
Then $[G:H]=2$ . It's clear $u_1\in H$ , also $u_2\in H$ since it's a square, thus all involutions are in $H$ .  
$|C_2\cap H|=8\cdot 36/72=4$ , while $C_2$ has five involutions, a contradiction.  
(vii)  
$V$ has element conjugate with $u_2$ in $G$ , there's $y\in G$ , $u_2\ne yu_2y^{-1}\in V$ .  
Having different centers, $yC_2y^{-1}\ne C_2$ .  
$u_2\in V\subset C(yC_2y^{-1})=yC_2y$ .  
(viii)  
$C(V)\subset C(u_2)=C_2$ , thus $C(V)=V$ .  
$V\triangleleft C_2$ , $yC_2y^{-1}$ , thus $C_2$ , $yC_2y^{-1}\subset N(V)$ .  
(ix)  
$N(V)/V=N(V)/C(V)\le \text{Aut}V\cong S_3$ .  
By (viii) , $N(V)/V$ contains at least 2 elements of order $2$ , thus $N(V)/V\cong S_3$ , and $|N(V)|=24$ .  
(x)  
Let $K$ be a normal subgroup of $G$ contained in $N(V)$ .  
Conjugacy classes of $u_1$ and $u_2$ have size $10$ and $15$ respectively.  
If $u_2\in K$ , then $|K|=24$ , $K=C_2$ , $u_1\in K$ ; if $u_1\in K$ , then $u_1u_2\in K$ , thus $u_2\in K$ .  
Since $10+15>24$ , conclude that $u_1$ , $u_2\notin K$ , and therefore $K$ contains no involutions.  
(Alternatively, look into $C_1$ , directly find involutions of both two conjugate classes that are not in $N(V)$ ).  
Thus $|K|$ divides $3$ , $K\cap V=1$ . Then $K\triangleleft KV$ and $V\triangleleft KV$ imply $K\subset C(V)=V$ , $K=1$ .  
Therefore, the action on $G/N(V)$ is effective , hence $G\cong S_5$ .

**11~14**

$|G|=p^km$ , let $G$ act on set of subsets of size $p^k$ by left translation.  
Let $H_A=\text{Stab}A$ , $A=H_AA=\bigcup H_Aa$ , thus $|H_A|$ divides $|A|=p^k$ .  
Note $|H_A|=p^k$ iff $A$ is a right coset. In this case $|\text{Orb}A|=m$ , otherwise $=mp^i$ .  
Let $n$ be the number of subgroups of order $p^k$ , since $Ha=Kb$ only if $H=K$ ,   
the number of all right cosets is $nm$ , and hence  
$\binom{p^km}{p^k}\equiv nm \pmod{mp}$ .  
apply the formula for a cyclic group, yields  
$\binom{p^km}{p^k}\equiv m \pmod{mp}$ .  
Thus $nm\equiv m\pmod{mp}$ , i.e., $n\equiv 1\pmod p$ 


**Remark**:  
Directly prove $\binom{p^km}{p^k}\equiv m \pmod{mp}$ .  
>It's equivalent to $\binom{p^km-1}{p^k-1}\equiv 1 \pmod{p}$ , which follows from the corollary readily,  
$\binom{p^km-1}{p^k-1}\equiv \binom{?}{0}\cdots\binom{?}{0}\binom{p-1}{p-1}\cdots\binom{p-1}{p-1}\equiv 1$ .  


**Theorem**: Let $m=m_1p^k+m_0$ , $0\le m_0<p^k$ ; similar for $n$ . Then  
$\binom{m}{n}\equiv\binom{m_1}{n_1}\binom{m_0}{n_0} \pmod p$
>proof 1:  
>In $\mathbb{Z}_p[x]$ , $(1+x)^m=(1+x)^{m_1p^k+m_0}=(1+x)^{m_1p^k}(1+x)^{m_0}=(1+x^{p^k})^{m_1}(1+x)^{m_0}$ .  
>Equal coefficients of $x^n$ .
>
>proof 2:  
>Let M be a set of size $m$ , split it into $m_1$ sets of size $p^k$  and $m_0$ points, $G=C_{p^k}^{m_1}$ acts on it naturally.  
>Then $G$ also acts on all subsets of size $n$ . number of fixed sets is $\binom{m_1}{n_1}\binom{m_0}{n_0}$ ,  
other sets are in orbits of size divisible by $p$ . They add up to $\binom{m}{n}$ .

**Corollay**:  
Let $m=ap^k+m_{k-1}p^{k-1}+\cdots +m_0$ , where $0\le m_i<p$ ;  
similarly , $n=bp^k+n_{k-1}p^{k-1}+\cdots +n_0$ . Then  
$\binom{m}{n}\equiv\binom{a}{b}\binom{m_{k-1}}{n_{k-1}}\cdots\binom{m_0}{n_0}\pmod p$ .

**15~16**

Let $v_p(m)$ be the maximal $k$ that $p^k\mid m$ , then  
$v_p(n!)=\sum_{k>0} k\cdot\#\{i\le n\mid v_p(i)=k \}=\sum_{k>0}\#\{i\le n\mid v_p(i)\ge k \}=\sum_{k>0} [n/p^k]$ .  
Let $n=a_0+a_1p+\cdots+a_jp^j$ , $0\le a_i <p$ , then also  
$v_p(n!)=\sum_{k>0} [(a_0+a_1p+\cdots+a_jp^j)/p^k]=\sum_{k=1}^j (a_k+\cdots+a_jp^{j-k})$  
$=\sum_{k=1}^j a_k(1+\cdots+p^{k-1})=(n-\sum_{k=0}^j a_k)/(p-1)$

$Z_p$ acts on a $p$-points set $M$ , then $Z_p\wr Z_p$ acts on $M\times M$ . (cf. 1.12 ex11)  
Wreath product of two effective is effective, thus $Z_p\wr Z_p$ embeds into $S_{p^2}$ . $|Z_p\wr Z_p|=p^{p}p=p^{p+1}$ .  
Inductively, $Z_p^{\wr r}=Z_p^{\wr r-1}\wr Z_p$ is a subgroup of $S_{p^r}$ of order $p^{p^{r-1}+p^{r-2}+\cdots+1}$ .  
Then split an $n$-points set according to the base-$p$ expansion $n=a_0+a_1p+\cdots+a_kp^k$ ,  
into subsets ($a_i$ sets of size $p^i$), on each of which some $Z_p^{\wr r}$ acts. (let $Z_p^{\wr 0}=1$)  
Thus $\prod_{i=1}^k (Z_p^{\wr i})^{a_i}\cong \prod_{i=0}^k (Z_p^{\wr i})^{a_i}$ embeds into $S_n$ .  
Since it has order $\prod_{i=1}^k p^{a_i(p^{i-1}+p^{i-2}+\cdots+1)}=p^{v_p(n!)}$ , it's a Sylow-p subgroup of $S_n$ . 

# ch2

## 2.1

**3**

$(1+a)(1+b)$

**4**

$m+n\sqrt{-3}=(m-n)+2n\omega$  
$I=\mathbb{Z}[\omega]$

**5**

$k=0$ , it's $a=a^{(0)}$ .  
Suppose it holds for $k$ , then it holds for $k+1$ :  
$\sum_{i=0}^{k+1} b^iab^{k+1-i}$  
$=b^{k+1}a+\sum_{i=0}^{k} b^iab^{k-i}b$  
$=b^{k+1}a+\sum_{j=0}^k\binom{k+1}{j+1} b^{k-j}a^{(j)}b$  
$=b^{k+1}a+\sum_{j=0}^k\binom{k+1}{j+1} b^{k-j}(a^{(j+1)}+ba^{(j)})$  
$=b^{k+1}a+\sum_{j=1}^{k+1}\binom{k+1}{j} b^{k+1-j}a^{(j)}+\sum_{j=0}^k\binom{k+1}{j+1} b^{k+1-j}a^{(j)}$  
$=a^{(j+1)}+\sum_{j=0}^k (\binom{k+1}{j}+\binom{k+1}{j+1})b^{k+1-j}a^{(j)}$  
$=\sum_{j=0}^{k+1} \binom{k+2}{j+1}b^{k+1-j}a^{(j)}$

proof 2:

Let $l$ be the operator $x\to bx$ , and $r$ be $x\to xb$ ,  
then $lr=rl$ and $x\to x^{(j)}$ is the operator $(r-l)^j$ .  
Then the formula is equivalent to  
$\sum_{i=0}^k l^ir^{k-i}=\sum_{j=0}^k \binom{k+1}{j+1}l^{k-j}(r-l)^j$ .

The polynomial identity $\sum_{i=0}^k x^iy^{k-i}=\sum_{j=0}^k \binom{k+1}{j+1}x^{k-j}(y-x)^j$ holds since  
after multiplying $(y-x)$ both sides are $y^{k+1}-x^{k+1}$ .

## 2.2

**1**

The map $r\to xr$ is injective for every $x\ne 0$ . Since finite, it's also surjective , thus $xy=1$ for some $y$ .  
Similarly get $zx=1$ .

proof 2:  
Since finite, the set $\{x,x^2,\cdots\}$ will repeat, let $x^i=x^{i+j}$ . If $x\ne 0$ ,
cancel it to $x^j=1$ .

**2**

$e^2=e$ , $e(e-1)=0$ , $e=0$ or $1$ .  
If $z\ne 0$ , by induction, $z^n\ne 0$ .

**3**

If $zw=0$ , $z$ is a left zero divisor ; otherwise it's a right zero divisor.

**4**

$1-ab$ is left (right) invertible <=> $1-ba$ is left (right) invertible:  
$(1-ab)c=1\to (1-ba)(1+bca)=1$  
$d(1-ab)=1\to (1+bda)(1-ba)=1$

**5**

zero divisors: $=0$ on an interval  
idempotents: $0$ , $1$  
nilpotent: $0$  
units: $\ne 0$ everywhere

**6**

Suppose $ab=1$  
$1\to 3\to 2$ is obvious.  
$2\to 1$ :  
suppose $a$ not invertible, then $ba\ne 1$ , thus $b+1-ba$ is another rigth inverse of $a$ . 

**7**

Suppose $a$ has exactly $k>1$ right inverses $\{b_1,\cdots,b_k\}$ .  
But since $1-b_ia\ne 0$ and $1-b_ia\ne 1-b_ja$ ,  
$\{0,1-b_1a,\cdots,1-b_ka\}$ are $k+1$ right zero divisors of $a$ , a contradiction.

monoid:  
the map $f:\mathbb{N}\to \mathbb{N}$ taking $0\to 0$ and other $n\to n-1$ has exactly $2$ right inverses.

Remark:  
$ab=1$ , $1-ba\ne 0$  
then $\{(1-ba)a^k\}$ are right zero divisors of $a$ , and are all distinct. 

**8**

(1) This is 1.2 ex7, for monoids.  
(2) $u(1-uv)u=u(1-vu)u=0$ , by uniqueness, $1-uv=1-vu=0$ .

**9**

$a$ , $b$ , $ab-1$ invertible deduce $a-b^{-1}$ invertible is plain.  
But then $a^{-1}(a-b^{-1})-1=(ba)^{-1}$ is invertible,  
thus in the same manner, $a^{-1}-(a-b^{-1})^{-1}$ is invertible.

$(a-b^{-1})^{-1}-a^{-1}=(a-b^{-1})^{-1}b^{-1}a^{-1}=(aba-a)^{-1}$

**10**

$\theta(x^{-1})=e\theta(x)x^{-1}=e^2\theta(x^{-1})xx^{-1}$  
$\to e^2=1$  
$\theta(x)x^{-1}=x^{-1}\theta(x)$  
$\theta(x^{-1})=ex^{-1}\theta(x)=ex^{-1}ex\theta(x^{-1})$  
$\to ex=xe$  

Let $D=\{0\}\cup G$  
for $a\in D$ , $x,y\in G$  
define addition  
$0+a=a+0=a$  
$x+y=0$ if $x=ey$ ，otherwise $=x\theta(x^{-1}ye)$  
multiplication  
$a0=0a=0$  
$xy=xy$

Then it is routine to verify ring axioms.

In order associativity of addition holds, (iv) should be modified to something like  
$y\theta(y^{-1}\theta(x))=x\theta(x^{-1}\theta(y))$ for $x\ne ey$

## 2.3

**2**

$AB=1\to\text{det}A\text{det}B=\text{det}B\text{det}A=1\to A$ invertible $\to BA=1$ .

**3**

$(1+pe_{ij})(1-pe_{ij})=(1-pe_{ij})(1+pe_{ij})=1-pe_{ij}pe_{ij}=1-ppe_{ij}e_{ij}=1$  

$z^n=0$ , then $1=1-z^n=(1-z)(1+z+\cdots+z^{n-1})$

**4**

If $\text{diag}\{a_1,\cdots,a_n\}^{-1}B=B\text{diag}\{a_1,\cdots,a_n\}^{-1}=1$ , then $a_ib_{ii}=b_{ii}a_i=1$ .  
The converse is clear.

**6**

Let $A=\sum_{k,l} a_{kl}e_{kl}$ ,  
$Ae_{ij}=\sum_{k,l}a_{kl}e_{kl}e_{ij}=\sum_{k,l}a_{kl}\delta_{li}e_{kj}=\sum_k a_{ki}e_{kj}$  
$e_{ij}A=\sum_{k,l}a_{kl}e_{ij}e_{kl}=\sum_{k,l}a_{kl}\delta_{jk}e_{il}=\sum_l a_{jl}e_{il}$  
Thus $C(e_{ij})=\{A|a_{ii}=a_{jj},\;a_{jk}=a_{ki}=0 \;\text{otherwise}\}$  
Thus $C(S)=\bigcap C(e_{ij})=RI$   
It's clear then $C=C(R)I$

(should have omitted $I$ , but then have to write $C_R(R)$ )

**7**

$C(N)=\{A\in M_n(R)|a_{ij}=a_{i+1,j+1}\;\text{for}\;1\le i,j<n;\;a_{k1}=0\;\text{for}\;k>1;\;a_{nk}=0\;\text{for}\;k<n\}$  
=$RN+RN^2+\cdots+RN^{n-1}$  
that is, $R[N]$

**8**

$C(D)\subset \bigcap C(e_{ii})=D$  
Since commutative, $D\subset C(D)$

**9**

Define group homomorphism $M_n(R)\xrightarrow f S:\sum_{i,j}b_{ij}E_{ij}\to\sum_{i,j}b_{ij}e_{ij}$ , where $E_{ij}$ are matrix units.


For $a\in S$ , let $a_{ij}=\sum_k e_{ki}ae_{jk}$  
then $a_{ij}e_{pq}=\sum_k e_{ki}ae_{jq}\delta_{kp}=e_{pi}ae_{jq}=e_{pq}a_{ij}$  
thus $a_{ij}\in R$  
$\sum_{i,j}a_{ij}e_{ij}=\sum_{i,j,k} e_{ki}ae_{jk}e_{ij}=\sum_{i,j}e_{ii}ae_{jj}=a$  
thus $f$ is surjective.

If $b_{ij}\in R$ and $\sum_{i,j}b_{ij}e_{ij}=0$ ,  
then every $b_{kl}=\sum_{i,j}b_{ij}\delta_{ki}\delta_{jl}=\sum_{i,j,q}e_{qk}b_{ij}e_{ij}e_{lq}=0$    
thus $f$ is injective.

Hence $f$ is a group isomorphism.  
Since $E_{ij}$ and $e_{ij}$ have same multiplication rules,  
$f$ is a ring isomorphism.  

**10**

$a\to au^{-1}$  
$a\to 1-a$

**12**

If $R$ is a skew field, by rank-nullity theorem,  
$A$ has zero divisor <=> not invertible

not true for commutative rings, e.g., $2\in M_n(\mathbb{Z})$ .

## 2.4

**1~3**

$x=\alpha _0+ \alpha _1i+ \alpha _2j+ \alpha _3k$  
Let $\bar x=\alpha _0- \alpha _1i- \alpha _2j- \alpha _3k$  
Since $x\to \bar x$ is taking adj (also Hertitian conjugate),  
$\overline{xy}=\bar y \bar x $ .

Let $N(x)$ , $T(x)$ be determinant and trace of $x$ matrix respectively, then  
$N(x)=\alpha _0^2+\alpha _1^2+\alpha _2^2+\alpha _3^2=x\bar x=\bar x x$  
$T(x)=2\alpha_0=x+\bar x $  
$x$ satisfies its characteristic equation $x^2-T(x)x+N(x)=0$ .

$N(xy)=xy\overline {xy}=xy\bar y\bar x=N(x)N(y)$ (or use property of det)

**5**

$I$ is a subring, not a division subring.

If $x\in I$ , then $\bar x\in I$ , $N(x)\in \mathbb{Z}\subset I$ .  
Thus $x$ is invertible in $I$ iff $N(x)$ is invertible in $\mathbb{Z}$ .

Thus $U(I)=\{\pm 1,\pm i,\pm j,\pm k\}\cup \{\frac{1}{2}(\pm 1\pm i\pm j\pm k)\}$ , where signs are arbitrarily taken.

$\color{red}{\text{remark:}}$  
Lipschitz  
Hurwitz

**6**

$\mathbb{H}\ni \begin{pmatrix}1&\\&1\end{pmatrix}$ , $\begin{pmatrix}i&\\&-i\end{pmatrix}$ , $\begin{pmatrix}&1\\-1&\end{pmatrix}$ , $\begin{pmatrix}&i\\ i&\end{pmatrix}$ is linear independent over $\mathbb{C}$ .  
Thus it's a base for $M_2(\mathbb{C})$ , thus $M_2(\mathbb{C})\subset\langle\mathbb{C},\mathbb{H}\rangle$ . 

**7**

If $x\in R$ , then $\text{adj}(x)$ , $\text{det}(x)\in R$ .  
Thus $x$ invertible in $R$ iff $\text{det}(x)$ invertible in $R$ ,  
that is, iff $a^2-mb^2-nc^2+mnc^2\ne 0$ .

$R$ is a division ring iff this holds for all $x\ne 0$ .  

$m=n<0$  
$m=n>0$

**8**

$C(i)=\mathbb{R}+\mathbb{R}i$  
$C(j)=\mathbb{R}+\mathbb{R}j$  
$C(k)=\mathbb{R}+\mathbb{R}k$

$C=\mathbb{R}$

**9**

Suppose $x=a+bi+cj+dk\in S$ not in the center, WLOG, $b\ne 0$ .  
Then $4bi=x+ixi^{-1}-jxj^{-1}-kxk^{-1}\in S$ .  
Then $\frac{1}{(x^2+1)}(i+xj)^{-1}4bi(i+xj)=\frac{-4b}{(x^2+1)}((x^2-1)i-2xj)\in S$ ,  
repalce $x$ with $-x$ , we get $\frac{8b(x^2-1)}{(x^2+1)}i$ , $\frac{16bx}{(x^2+1)}j\in S$ .  
Variating $x$ , $\frac{(x^2-1)}{(x^2+1)}$ will run through some interval, thus $\mathbb{R}i\in S$ .  
Thus $\mathbb{R}$ , $\mathbb{R}j$ , $\mathbb{R}k\in S$ , and $S=\mathbb{H}$ .

Note the condition "division" is redundant.  
In $\mathbb{H}$ , $S$ doesn't have to be a division subring as in ex10. 

**10**

Suppose $S\ne D$ .  
Let $d\notin S $ , $a\in S$ ,  
then  
$dad^{-1}=s_1\in S$  
$(1+d)a(1+d)^{-1}=s_2\in S$  
that is  
$da=s_1d$  
$(1+d)a=s_2(1+d)$  
thus  
$(s_2-s_1)d=a-s_2$  

Since $S$ is a division subring, the above implies $s_2=s_1=a$ .  
Thus $da=ad$ , for arbitrary.  
Thus $D\setminus S\subset C(S)$ ,  
with this it's readily to deduce $S\subset C(S)$ .  
Therefore $D\subset C(S)$ , $S\subset C$ .

proof 2: (Hua)  
basically the same  
$a(a^{-1}ba-(a-1)^{-1}b(a-1))=b-(a-1)^{-1}b(a-1)$  

corollary:  
A division ring is generated by all conjugates of a noncentral element.

## 2.5

**2~3**

Ideals of $R$ is a semiring under $+$ and $\cdot$

$I+J=J+I$  
$(I+J)+K=I+(J+K)$  
$0+I=I$

$RI=IR=I$  
$I(JK)=(IJ)K$  

$I(J+K)=IJ+IK$  
$(J+K)I=JI+KI$

Remark:  
It's a lattice under $+$ and $\cap$

**5**

If $R$ is a division ring, let $L\ne 0$ be a left ideal with an element $x\ne 0$ ,  
then $1=x^{-1}x\subset L$ , thus $R=R1\subset L$ , $L=R$ .

Suppose the only left ideals are $0$ , $R$ .  
Let $R\ni x\ne 0$ , then the left ideal $Rx=R$ , thus $yx=1$ for some $y$ .  
Similarly $zy=1$ for some $z$ . Thus $y$ is invertible and $x^{-1}=y$ .  
Thus $R$ is a division ring.

Similar for right ideals.

Remark:  
$R\ne 0$  
simple (only has trivial ideals) <= only has trivial left (right) ideals <=> division ring  

$M_n(F)$ is simple, but not a division ring. cf., ex8. 

**6**

Let $x,y\in N$ , $x^m=y^n=0$ , $z\in R$ , then since $R$ is commutative,  
$(x-y)^{m+n-1}=0$ , $x-y\in N$  
$(zx)^m=0$ , $zx\in N$  
and $N\ne \varnothing$ since $0\in N$  
Thus $N$ is an ideal.

$x^n\in N$ , implies $x^{nm}=(x^n)^m=0$ for some $m$ .

**7**

$f:R\to R/I$ induces a group homomorphism $g:U\to f(U)$ ,  
$U_1=\text{ker}g$ , thus a normal subgroup of $U$ .

e.g., congruence subgroups of the modular group.

**8**

If $I$ is an ideal, it's clear so is $M_n(I)$ .  

Let $M$ be an ideal of $M_n(R)$ ,  
$I$ the set of all values taken by entries of matrices in $M$ , clearly $M\subset M_n(I)$ .  
If $A=\sum a_{ij}e_{ij}\in M$ , then $e_{ij}Ae_{kl}=a_{jk}e_{il}\in M$ ,  
from this we conclude $I$ is an ideal and $M=M_n(I)$ .

Corollary: $M_n(R)$ is simple iff $R$ is simple.  
e.g., $R$ a field.

## 2.6

**4**

$|GL_2(\mathbb{Z}/(p))|=(p^2-1)(p^2-p)$  
thus $A^p=1$  

For $A\in M_2(\mathbb{Z}/(p))\setminus GL_2(\mathbb{Z}/(p))$ ,  
let $A=\begin{pmatrix}b\\ c\end{pmatrix}\begin{pmatrix}d&e\end{pmatrix}$ , and $\begin{pmatrix}d&e\end{pmatrix}\begin{pmatrix}b\\ c\end{pmatrix}=a$ .  
Since $(p-1)\mid q$ , $a^{q+1}=a$ .  
Thus $A^{q+2}=a^{q+1}A=aA=A^2$ .

**5**

It's clear $T$ is a subring.

Let $I$ be an ideal of $T$ .  
Let $I_{ij}=\{x\in \mathbb{Z}|x=A_{ij} \text{ for some } A\in I \}$ , clearly $I_{ij}$ is an ideal of $\mathbb{Z}$ .

Note

$\begin{pmatrix}1&\\&0\end{pmatrix}\begin{pmatrix}a&\\ b&c\end{pmatrix}=\begin{pmatrix}a&\\&0\end{pmatrix}$

$\begin{pmatrix}a&\\ b&c\end{pmatrix}\begin{pmatrix}0&\\ &1\end{pmatrix}=\begin{pmatrix}0&\\&c\end{pmatrix}$

$\begin{pmatrix}0&\\&1\end{pmatrix}\begin{pmatrix}a&\\ b&c\end{pmatrix}\begin{pmatrix}1&\\&0\end{pmatrix}=\begin{pmatrix}0&\\ b&0\end{pmatrix}$

$\begin{pmatrix}0&\\1&0\end{pmatrix}\begin{pmatrix}a&\\ b&c\end{pmatrix}=\begin{pmatrix}0&\\ a&0\end{pmatrix}$

$\begin{pmatrix}a&\\ b&c\end{pmatrix}\begin{pmatrix}0&\\ 1&0\end{pmatrix}=\begin{pmatrix}0&\\ c&0\end{pmatrix}$

thus conclude

$I_{22}$ , $I_{11}\subset I_{21}$

$\begin{pmatrix}I_{11}&\\ I_{21}&I_{22}\end{pmatrix}\subset I$

Thus $I=\begin{pmatrix}I_{11}&\\ I_{21}&I_{22}\end{pmatrix}=\begin{pmatrix}m\mathbb{Z}&\\ l\mathbb{Z}&n\mathbb{Z}\end{pmatrix}$ , where $m,n,l\in \mathbb{Z}$ and $l\mid (m,n)$ .  
Then verify this is indeed an ideal.

## 2.7

**2**

If $u$ is a unit, so is $\eta(u)$ ; the converse is not true, e.g., $\mathbb{Z}\to \mathbb{Z}/(5)$ .

Thus $\eta(U(R))\subset U(\eta(R))$ , don't have to equal.

**4**

$1^p=1$  
$(ab)^p=a^pb^p$

$p\mid \binom{p}{k}$ if $0<k<p$  
thus $(a+b)^p=\sum_k\binom{p}{k}a^kb^{p-k}=a^p+b^p$  

Thus $a\to a^p$ is an endomorphism, not neceessarily an automorphism, e.g., $R=\mathbb{Z}/(p)[x]$ .

This map is injective iff $R$ has no nilpotent element.


**5**

Units of the prime ring form a subgroup of $U(F)$ , thus $p-1\mid |F|-1$ .

proof 2:  
$F$ is a finite vector space over its prime field $\mathbb{Z}/(p)$ , thus  $|F|=p^k$ .

**6**

If $\text{char}R=mn$ , the ideal $mR\ne 0$ , $R$ .

**8**

$f:D\to R$  
$R\ne 0$ , thus $1\to 1\ne 0$ , $\text{ker}f\ne D$ .  
Since $D$ is a division ring, it's simple, thus $\text{ker}f=0$ .

**10~11**

$I_j+\bigcap_{k\ne j} I_k=R$ , thus suppose $x_j+y_j=1$ , where $x_j\in I_j$ , $y_j\in \bigcap_{k\ne j}I_k$ .  
Let $a=\sum_i a_iy_i$ , then $a\equiv a_i\pmod{I_i}$

Thus the natural homomorphism $f:R\to \bigoplus_i R/I_i$ is surjective,  
and $R/\text{ker}f=R/\bigcap_i I_i\cong \bigoplus_i R/I_i$

Remark:  
The condition is quivalent to coprime pairwise, $I_i+I_j=R$ ,  
$R=(I_1+I_2)(I_1+I_3)\cdots(I_1+I_m)\subset I_1+I_2I_3\cdots I_m\subset I_1+\bigcap_{i\ne 2} I_i\subset R$

**12**

If $m,n$ coprime, then $(n)+(m)=\mathbb{Z}$ , $(mn)=([m,n])=(m)\cap(n)$ ,  
thus by ex11, $\mathbb{Z}/(mn)\cong \mathbb{Z}/(m)\oplus \mathbb{Z}/(n)$ .  
count units, $\phi(mn)=\phi(m)\phi(n)$

$\phi(n)=phi(\prod_i p_i^{k_i})=\prod_i\phi(p_i^{k_i})=\prod_i p_i^{k_i}(1-\frac{1}{p_i})=n\prod_i (1-\frac{1}{p_i})$ .

**13**

Clearly it's identity on $\mathbb{Q}$ .  

If $x\ge 0$ , $f(x)=f(\sqrt x)^2\ge 0$ , thus $f$ preserves order.  

**14**

From ex13 we know $\eta$ is identity on constants.

Suppose $\eta$ is not a evaluation map, then for every $t\in [0,1]$ ,there's $f_t\in R$ satisfying $\eta(f_t)\ne f_t(t)$ .  
Let $g_t=f_t-\eta(f_t)$ , then $g_t(t)\ne 0$ , $\eta(g_t)=0$ . By continuity, there's open intervals $\epsilon_t\ni t$ on which  
$g_t(x)\ne 0$ . Since $[0,1]$ is compact, a finite set $\{\epsilon_{t_i}\}_1^n$ will cover $[0,1]$ .  
Now $g=\sum_{i=1}^n g_{t_i}^2$ does not have zeros on $[0,1]$ , thus invertible; while $\eta(g)=0$ , a contradiction.

**15**

For a ring $R$ , $I$ is maximal iff $R/I$ simple,  
in the commutative case, iff $R/I$ is a division ring.

**16**

$I$ is maximal $\Leftrightarrow$ $R/I$ is a field $\Rightarrow$ $R/I$ is a domain $\Leftrightarrow$ $I$ is prime.

Remark:  
In the non-commutative case,  
define prime ideal to be $I\ne R$ such that if $I_1I_2\subset I$ , then $I_1$ or $I_2\subset I$ ,  
define prime ring to be $R$ in which $\{0\}$ is a prime ideal.

Then $I$ maximal $\Leftrightarrow$ $R/I$ simple $\Rightarrow$ $R/I$ prime ring $\Leftrightarrow$ $I$ prime.

**17**

ideals:  
$(0),(30),(20),(15),(12),(10),(6),(5),(4),(3),(2),(1)$

maximal, prime ideals coincide:  
$(30),(20),(15)$

## 2.8

**2**

remark:  
$i\to -i$  
$j\to -j$  
$k\to -k$  
are three anti-automorphisms,  
any composition  
$i\to -i$ , $j\to -j$  
is an automorphism.

**3**

remark:  
$A\to A^t$ is not anti-automorphism of $M_n(R)$ ,  
rather, $M_n(R)\to M_n(R^o)$

**5**

It's clear $R=\{f(x)+g(x)y\}$ .

$(1,x,x^2,y,xy,x^2y)$ span $R$ .  
Let $a_1+a_2x+a_3x^2+a_4y+a_5xy+a_6x^2y=0$ ,  
multiply $x^2$ from left, $y$ from right, get $a_1x^2y=0$ , thus $a_1=0$ .  
Continue, get all $a_i=0$ . Thus the set is a base.

Let $a,b\in R$ , $a^2=0$ , $b^n=0$ .  
Then $b=(0,*,*,*,*,*)$ , $a=(0,0,*,*,*,*)$ ,  
thus $b^2=(0,0,*,0,*,*)$ and $ab^2=0$ .

Thus an anti-automorphism of $R$ will send $x^2y\ne 0$ to $y'^2x'=0$ .

Remark:  
Automorphism always exists while anti-automorphism may not.

**7**

$abc+cba=-(a-c)b(a-c)+aba+cbc$  
thus  
$\eta(abc+cba)=\eta(a)\eta(b)\eta(c)+\eta(c)\eta(b)\eta(a)$  
let $b=1$  
$\eta(ac+ca)=\eta(a)\eta(c)+\eta(c)\eta(a)$

**8**

$(\eta(ab)-\eta(a)\eta(b))(\eta(ab)-\eta(b)\eta(a))$  
$=\eta(abab)+\eta(a)\eta(bb)\eta(a)-\eta(ab)\eta(b)\eta(a)-\eta(a)\eta(b)\eta(ab)$  
$=\eta(abab)+\eta(abba)-\eta(abba+abab)$  
$=0$

**9**

Suppose $\eta(xy)=\eta(x)\eta(y)\ne \eta(y)\eta(x)$ .  
Then for every $z$ , $\eta(x(y+z))=\eta(xy+xz)=\eta(x)\eta(y)+\eta(xz)$ ,  
on the other hand,  
$\eta(x(y+z))=\eta(x)\eta(y+z)=\eta(x)\eta(y)+\eta(x)\eta(z)$  
or $=\eta(y+z)\eta(x)=\eta(y)\eta(x)+\eta(z)\eta(x)$ .  
Compare them we get $\eta(xz)=\eta(x)\eta(z)$ .  
Similarly, $\eta(zy)=\eta(z)\eta(y)$ .

Suppose another $\eta(ab)=\eta(b)\eta(a)\ne \eta(a)\eta(b)$ .  
Similar as above, $\eta(cb)=\eta(b)\eta(c)$ , $\eta(ac)=\eta(c)\eta(a)$ for all $c$ .

Thus  
$\eta(xb)=\eta(x)\eta(b)=\eta(b)\eta(x)$  
$\eta(ay)=\eta(a)\eta(y)=\eta(y)\eta(a)$

Then  
$\eta((x+a)(y+b))=\eta(xy+xb+ay+ab)=\eta(x)\eta(y)+\eta(x)\eta(b)+\eta(a)\eta(y)+\eta(b)\eta(a)$ ,  
on the other hand,  
$\eta((x+a)(y+b))=\eta(x+a)\eta(y+b)=\eta(x)\eta(y)+\eta(x)\eta(b)+\eta(a)\eta(y)+\eta(a)\eta(b)$  
or $=\eta(y+b)\eta(x+a)=\eta(y)\eta(x)+\eta(b)\eta(x)+\eta(y)\eta(a)+\eta(b)\eta(a)$ .  
Compare them we get a contradiction. 

**proof 2**:
>For $a\in R$ ,  
>let $S_a=\{b\in R|\eta(ab)=\eta(a)\eta(b)\}$ ,  
>$T_a=\{b\in R|\eta(ab)=\eta(b)\eta(a)\}$ ,  
>which are subgroups of $(R,+)$ , and $R=S_a\cup T_a$ .  
>Thus $R=S_a$ or $T_a$ .
>
>Let $S=\{a\in R|R=S_a\}$ , $T=\{a\in R|R=T_a\}$ .  
>Again they are subgroups of $(R,+)$ and $R=S\cup T$ (by above) ,  
>thus $R=S$ or $R=T$ , homo or anti-homo respectively.

**10**

A direct consequence of ex8 and 9.

**11**

Suppose $a,b,ab-1\in D^*$ , Hua's identity $((a-b^{-1})^{-1}-a^{-1})^{-1}=aba-a$ ,  
apply $\eta$ it becomes $((\eta(a)-\eta(b)^{-1})^{-1}-\eta(a)^{-1})^{-1}=\eta(aba)-\eta(a)$ .

$ab-1\ne 0\Rightarrow a^{-1}-b\ne 0\Rightarrow \eta(a)^{-1}-\eta(b)\ne 0\Rightarrow \eta(a)\eta(b)-1\ne 0$ ,  
thus $\eta(a),\eta(b),\eta(a)\eta(b)-1\in D^*$ , and  
$((\eta(a)-\eta(b)^{-1})^{-1}-\eta(a)^{-1})^{-1}=\eta(a)\eta(b)\eta(a)-\eta(a)$ .

Compare, we get $\eta(aba)=\eta(a)\eta(b)\eta(a)$ ;  
note if any of $a,b,ab-1\notin D^*$, this identity trivially holds.

The result follows from ex10.

## 2.9

**1**

$F\cong \text{Frac}(F)$ , $a\to a/1$ .

**2**

Use universal property to show  
a field generated by $D$ is essentially $\text{Frac}(D)$ .

**3**

This construction corresponds precisely to the multiplicative aspect of building the field of fractions.

Remark:

More generally, let $S$ be a commutative semigroup. The **Grothendieck group** of $S$ is  
$K(S)=S\times S/ \sim $ , where $(a,b)\sim (c,d)$ if there's $x\in S$ such that $adx=bcx$ ,  
with multiplication $(a/b)(c/d)=ac/bd$ , unit $a/a$ , inverse $(a/b)^{-1}=b/a$ .  
It's an abelian group.   

The natural map $i:S\to K(S)$ , $i(s)=sa/a$ , has the following universal property:  
For every abelian group $G$ and semigroup homomorphism $f:S\to G$ ,  
there's a unique group homomorphism $g:K(S)\to G$ , such that $f=g\circ i$ .

Note $i$ is an embedding iff $S$ has cancellation law.

**4**

Embed it into the field of fractions.  
If $a=0$ , then $b^m=0$ , $b=0$ .  
Otherwise, $(ba^{-1})^m=1$ , $(ba^{-1})^n=1$ , $ba^{-1}=1$ .

Or cope with it directly in the domain, using Euclidean algorithm.

**5**  

Let $(a,s)\sim(b,t)$ , $(b,t)\sim(c,u)$ ,  
$x(at-sb)=0$ , $y(bu-tc)=0$ ,  
thus $xyt(au-sc)=0$ , $(a,s)\sim(c,u)$ .  
Other verification is routine.

In the new ring $RS^{-1}$ , all $s$ are invertible, $(s/1)(1/s)=s/s=1$ .  

The natural map $i:R\to RS^{-1}$ , $i(a)=a/1$ , has the universal property:  
For every commutative ring $B$ and homomorphism $f:R\to B$ that maps $S$ into $U(B)$ ,  
there's a unique homomorphism $g:RS^{-1}\to B$ such that $f=g\circ i$ .

$\text{ker}i=\{a\in R|sa=0 \text{ for some } s\in S\}$ , thus $i$ is monomorphic iff $S$ has no zero divisors.  
In particular if $0\in S$ , $RS^{-1}=0$ .

**6**


Let $bd_1=db_1\ne 0$ , $ad_1=cb_1$ , $bd_2=db_2\ne 0$ .  
By RCM property, suppose $d_1p=d_2q\ne 0$ ,  
then $db_1p=bd_1p=bd_2q=db_2q$ , $b_1p=b_2q$ .  
Thus $ad_2q=ad_1p=cb_1p=cb_2q$ , $ad_2=cb_2$ .  
Thus $\sim$ is independent of choice.

Clearly $\sim$ is reflxive and symmetric.  
For transitivity, suppose $(a,b)\sim (c,d)$ and $(c,d)\sim (e,f)$ .  
Then $bd_1=db_1\ne 0$ , $ad_1=cb_1$ , $df_2=fd_2\ne 0$ , $cf_2=ed_2$ .  
By RCM, let $b_1p=f_2q\ne 0$ , then $bd_1p=fd_2q\ne 0$ and $ad_1p=ed_2q$ ,  
thus $(a,b)\sim (e,f)$ .

Define additon $a/b+c/d=(ad_1+cb_1)/m$ , where $m=bd_1=db_1\ne 0$ .  
Suppose $a/b=a'/b'$ , $c/d=c'/d'$ , $n=b'd_2=d'b_2\ne 0$ , $mn_1=nm_1\ne 0$ .  
Then $bd_1n_1=b'd_2m_1\ne 0$ , $db_1n_1=d'b_2m_1\ne 0$ , thus $ad_1n_1=a'd_2m_1$ , $cb_1n_1=c'b_2m_1$ ,  
thus $(ad_1+cb_1)/m=(a'd_2+c'b_2)/n$ .  
Hence addition is well-defined (independent of choice of $m$ and representatives).  
$0=0/1$ , $-(a/b)=-a/b$ .  
Cleary it's commutative.  
Associativity follows from $(a/b+c/d)+e/f=(aa'+cc'+ee')/m=a/b+(c/d+e/f)$ ,  
where $m=ba'=dc'=fe'\ne 0$ .

Define multiplication $(a/b)(c/d)=ac_1/db_1$ , where $b_1\ne 0$ , $cb_1=bc_1$ .  
Suppose $a/b=a'/b'$ , $c/d=c'/d'$ , $c'b_2=b'c_2$ , $b_2\ne 0$ .  
If $c=0$ , then $c'=c_1=c_2=0$ , and $ac_1/db_1=a'c_2/d'b_2$ .  
Otherwise $c_1$ , $c_2\ne 0$ . Suppose $db_1m=d'b_2n\ne 0$ , then $cb_1m=c'b_2n$ ,  
then $bc_1m=b'c_2n$ , then $ac_1m=a'c_2n$ , then $ac_1/db_1=a'c_2/d'b_2$ .  
(intuitively this is $ac_1/db_1=(ac_1/bc_1)(cb_1/db_1)=(a/b)(c/d)=(a'/b')(c'/d')=\cdots$)  
Thus multiplication is well-defined.  
$1=1/1$ , $(a/b)^{-1}=b/a$ if $a\ne 0$ .  
For associativity, let $((a/b)(c/d))(e/f)=ac_1m/fn$ , $bc_1=cb_1$ , $db_1m=en$ , $b_1n\ne 0$ ,  
then $(a/b)((c/d)(e/f))=(a/b)(cb_1m/fn)=ac_1m/fn$ .

Distributive law is routine.

$F$ is a division ring with elements of the form $a/b=(a/1)(b/1)^{-1}$ .  
$i:a\to a/1$ is an embedding $D\to F$ .

**7**

$a_1a_2=a_3a_4$ , $a_1b_2=a_3b_4$ , $b_1a_2=b_3a_4$ ,  
$\Rightarrow b_1b_2=b_3a_4a_2^{-1}a_1^{-1}a_3b_4=b_3b_4$ .

$u,v\in W$ , $u\equiv v$ iff $u$ can be transformed into $v$ after a finite number of substitution:  
$a_1a_2\leftrightarrow a_3a_4$ , $a_1b_2\leftrightarrow a_3b_4$ , $b_1a_2\leftrightarrow b_3a_4$ .  
Thus $b_1b_2\not\equiv b_3b_4$ .  
Note a special feature of the relations is,  
in each class, there's exact one word that does not contain $a_1a_2$ , $a_1b_2$ or $b_1a_2$ , call it reduced.

Suppose $ss_1\equiv ss_2$ , assume $s$ , $s_1$ , $s_2$ are reduced.  
If both $ss_1$ and $ss_2$ are reduced, then $s_1=s_2$ .  
Otherwise, both are one step from reduction at the junction, which also leads to $s_1=s_2$ .  
Similarly for the case $s_1s\equiv s_2s$ .  
Thus the quotient monoid $S$ is cancellable.

Since $b_1b_2\ne b_3b_4$ , $S$ cannot be embedded into a group.

**8**

It's clear $\mathbb{Z}[S]$ is a ring.

Suppose $(\sum_i n_is_i)(\sum_j m_jt_j)=0$ ,  
where the coefficients are nonzero, and $s_i$ , $t_j$ are reduced words (same terms collected).  
Assume $s_1$ , $t_1$ are the longest words in each sum.  
Since $s_1t_1$ is cancelled by some $s_it_j$ , and then $s_1t_j$ is not cancellable, we get a contradiction.  
Thus $\mathbb{Z}[S]$ is a domain.

$\mathbb{Z}[S]$ cannot be embedded into a division ring,  
otherwise $S$ would be embedded into a group, contradicts ex7.

## 2.10

**1**

$\omega$ satisfies $x^2+x+1=0$ , and no lower.

$f(x)=q(x)(x^2+x+1)+r(x)$ , $\text{deg}r(x)<2$ .  
Then $f(\omega)=0\Leftrightarrow r(\omega)=0$ , $\Leftrightarrow r(x)=0$ .  
Thus $I=(x^2+x+1)$ .

**2**

Let $a+b\sqrt 2=\sqrt 3$ , then $a^2+2b^2+2\sqrt 2ab=3$ , thus $ab=0$ ,  
then $a^2=3$ or $2b^2=3$ , neither is valid.  
Thus $\sqrt 3\notin \mathbb{Q}[\sqrt 2]$ .

Let $0=a+b\sqrt 2+c\sqrt 3+d\sqrt 6=a+b\sqrt 2+(c+d\sqrt 2)\sqrt 3$ .  
Since $1$ and $\sqrt 2$ are independent, if $c=d=0$ , then $a=b=0$ ;  
otherwise $c+d\sqrt 2\ne 0$ and $\sqrt 3=\frac{a+b\sqrt 2}{c+d\sqrt 2}=\frac{(a+b\sqrt 2)(c-d\sqrt 2)}{c^2-2d^2}\in \mathbb{Q}[\sqrt 2]$ , contradicts.

From ex1 we see the ideal is generated by a(the) lowest polynomial satisfied by $u$ .  
$u=\sqrt 2+\sqrt 3$ , $u^2=5+2\sqrt 6$ , $u^3=11\sqrt 2+9\sqrt 3$ , $u^4=49+20\sqrt 6$ ,  
then $u^4-10u^2+1=0$ , and by independece of $\{1,\sqrt 2,\sqrt 3,\sqrt 6\}$ , no lower polynomial is satisfied.  
Thus $I=(x^4-10x^2+1)$ .

**Remark:**

lemma:  
Suppose $\text{char}F\ne 2$ , $a,b\in F$ , $\sqrt a$ , $\sqrt b$ , $\sqrt {ab}\notin F$ ,  
then $[F[\sqrt a,\sqrt b]:F]=4$ .
>$\sqrt a\notin F\Rightarrow [F[\sqrt a]:F]=2$  
>Suppose $\sqrt b\in F[\sqrt a]$ , $\sqrt b=q_1+q_2\sqrt a$ , then  
>$b=q_1^2+aq_2^2+2q_1q_2\sqrt a$  
>if $q_1q_2\ne 0$ , $2q_1q_2\ne 0$ , $\sqrt a\in F$  
>if $q_1=0$ , $\sqrt {ab}\in F$  
>if $q_2=0$ , $\sqrt b\in F$   
>all contra. Thus $[F[\sqrt a,\sqrt b]:F[\sqrt a]]=2$ and $[F[\sqrt a,\sqrt b]:F]=4$ .

**Theorem:**  
Suppose $\text{char}F\ne 2$ , $a_1,\cdots,a_n\in F$ , all nonempty subsets of $\{\sqrt{a_1},\cdots,\sqrt{a_n}\}$ have product $\notin F$ .  
Then $[F[\sqrt{a_1},\cdots,\sqrt{a_n}]:F]=2^n$ .  
As a consequence, the $2^n$ products of $\{\sqrt{a_1},\cdots,\sqrt{a_n}\}$ form a basis.
>It's clear $[F[\sqrt{a_1}]:F]=2$ .  
>By induction, suppose it's true for $<n$ .  
>Thus let $L=F[\sqrt{a_1},\cdots,\sqrt{a_{n-2}}]$ , then $[L:F]=2^{n-2}$ ,  
>and $[L[\sqrt{a_{n-1}}]:F]=[L[\sqrt{a_{n}}]:F]=[L[\sqrt{a_{n-1}a_n}]:F]=2^{n-1}$ .  
>Thus $\sqrt {a_{n-1}}$ , $\sqrt{a_n}$ , $\sqrt{a_{n-1}a_n}\notin L$ .  
>By the lemma, $[L[\sqrt{a_{n-1}},\sqrt{a_n}]:L]=4$ ,  
>and $[F[\sqrt{a_1},\cdots,\sqrt{a_n}]:F]=4\cdot2^{n-2}=2^n$ .

**Corollary:**  
Let $m_1,\cdots,m_n$ be distinct square-free positive integers,  
then $\{\sqrt{m_1},\cdots,\sqrt{m_n}\}$ is linear independent over $\mathbb{Q}$ .
>Apply the theorem for all prime factors of the $m_i$ s.

**5**

$R[x_1,\cdots,x_n]=R[x_1,\cdots,x_{n-1}][x_n]$ , by construction, $x_n$ is central;  
By induction, all $x_i$ , $i<n$ , are central in $R[x_1,\cdots,x_{n-1}]$ ,  
thus central in $R[x_1,\cdots,x_n]$ since $x_ix_r=x_rx_i$ .

$x_i$ is central in $R[x_1,\cdots,x_n]$ ; for any ring homomorphism $R\to S$ , and $u_i$ central in $S$ ,  
there's a unique extension $R[x_1,\cdots,x_n]\to S$ sending $x_i\to u_i$ .

**6**

$M_n(R[x_1,\cdots,x_r])\ni (\sum_{i\in\mathbb{N}^r} c_{jk,i}X^i)=\sum_{i\in\mathbb{N}^r}X^i(c_{jk,i})\to \sum_{i\in\mathbb{N}^r}(c_{jk,i})X^i$  
is a natural isomorphism.
 
proof 2:  
By ex5, there's a homomorphism $M_n(R)[x_1,\cdots,x_r]\to M_n(R[x_1,\cdots,x_r])$  
that's identity on $M_n(R)$ and sending $x_i$ to $x_iI$ . Clearly it's bijective.

**9**

For any $f:R\to R'$ , and $u_1,\cdots,u_r\in R'$ ,  
a map $x_i\to u_i$ determines a homomorphism $g:\mathbb{N}^{(r)}\to (R',\times)$,  
so since there's a unique $R[\mathbb{N^{(r)}}]\to R'$ agrees $f$ and $g$ ,  
there's a unique $R[\mathbb{N^{(r)}}]\to R'$ extending $f$ and sending $x_i\to u_i$ .  
Hence $R[\mathbb{N^{(r)}}]\cong R[x_1,\cdots,x_r]$ by universal property.

**10**

$R$ is central in $R[FM^{(r)}]$ ;  
for any ring homomorphism $R\to S$ that maps $R$ into $C(S)$ , and $s_1,\cdots,s_r\in S$ ,  
there's a unique extension $R[FM^{(r)}]\to S$ sending $x_i\to s_i$ .


## 2.11

**2**

Let $g(x)=a_nx^n+\cdots+a_0\in \mathbb{Z}[x]$ ,  
$a$ , $b$ two coprime integers such that $g(a/b)=0$ ,  
then $b\mid a_n$ , $a\mid a_0$ .

If $f(x)=x^3+3x-2$ is reducible in $\mathbb{Q}[x]$ , it has a root in $\mathbb{Q}$ ;  
by above, all possibilities are $\pm 1$ , $\pm 2$ ; none is valid.  
Thus $f(x)$ is irreducible and $F[u]\cong F[x]/(f(x))$ is a field.  

**3**

(a) $\mathbb{Q}[\sqrt 2]$ does not contain a sqrt of 3 , so $\mathbb{Q}[\sqrt 2]\not\cong\mathbb{Q}[\sqrt 3]$ .

(b)  
$p=2$ , $x^2-2=(x+1)^2-3$ , $x\to x+1$ gives $R_1\cong R_2$  
$p=5$ , $x^2-2=4((3x)^2-3)$ , $x\to 3x$ gives $R_1\cong R_2$  
$p=11$ , $3$ is a square in $\mathbb{F}_p$ while $2$ not, thus $R_1$ a field, $\not\cong R_2$ not a field.

Remark:  
If $x^2-a$ is reducible in $\mathbb{F}_p[x]$ and has multiple roots, then $\mathbb{F}_p[x]/(x^2-a)\cong \mathbb{F}_p[x]/(x^2)$  
If $x^2-a$ is reducible in $\mathbb{F}_p[x]$ and has distinct roots, then by CRT, $\mathbb{F}_p[x]/(x^2-a)\cong \mathbb{F}_p\times \mathbb{F}_p$  
If $x^2-a$ is irreducible in $\mathbb{F}_p[x]$ , then $\mathbb{F}_p[x]/(x^2-a)\cong\mathbb{F}_{p^2}$

**8**

Let $u=\alpha_ 0+\alpha_ 1i+\alpha_ 2j+ \alpha_ 3k$  
$u^2=-1\Leftrightarrow -u=\bar u/N(u)\Leftrightarrow \alpha_ 0=0$ and $\alpha_ 1^2+\alpha_ 2^2+\alpha_ 3^2=1$

**9**

If it's a principal ideal it must be $(1)$ , then there are polynomial $f(x)$ and $g(x)$ ,  
such that $3f(x)+(x^3-x^2+2x-1)g(x)=1$ ,  
then $(x^3-x^2+2x-1)g(x)=1$ in $\mathbb{F}_3[x]$ , a contradiction.

**10**

$R/(a,b)\cong \frac{R/(a)}{(a,b)/(a)}=\frac{R/(a)}{(\overline b)}$

Thus $\mathbb{Z}[x]/I\cong\mathbb{F}_3[x]/(x^3-x^2-x-1)$ ;  
since $(x^3-x^2-x-1)$ is irreducible in $\mathbb{F}_3[x]$ , this is a field. 

**11**

This holds for any commutative $R$ (**McCoy's theorem**).

Let $f(x)=a_nx^n+\cdots+a_0$ ,  
$g(x)=b_mx^m+\cdots+b_0$ , $b_m\ne 0$ , be a zero divisor of $f(x)$ of least degree.  
Thus if $cb_m=0$ , $cg(x)=0$ .  
Using this we conclude subsequently $a_kg(x)=0$ for all $k$ ,  
thus $b_mf(x)=0$ .

Remark:  
Having no nilpotents is superfluous,  
but with this assumption we have a stronger result:  
For any $f(x)=a_nx^n+\cdots+a_0$ , $g(x)=b_mx^m+\cdots+b_0$ ,  
if $f(x)g(x)=0$ , then all $a_ib_j=0$ .
>Inductively $b_ma_n=b_m^2a_{n-1}=\cdots=b_m^{n-1}a_0=0$ ,  
>so for all $i$ , $b_ma_i$ is nilpotent, and thus $=0$ .  
>Repeat this for $f(x)$ and $g(x)-b_mx^m$ .

**12,13**

$x^2=1$ has solution(s) $\pm 1$ , all other elements are in pairs $(a,a^{-1})$ ,  
thus the product is $-1$ .

**15**

$p\ne 2$ , $\mathbb{F}_p^*$ is a cyclic group of even order $p-1$ .  
If $a\in \mathbb{F}_p^*$ is a square, then $a^{(p-1)/2}=1$ , otherwise $a^{(p-1)/2}=-1$ .  
Meanwhile $0^{(p-1)/2}=0$ .  
In all cases we have $n^{(p-1)/2}\equiv (\frac{n}{p})\pmod p$ ,  
thus $(\frac{n}{p})(\frac{m}{p})\equiv (\frac{nm}{p})\pmod p$ ,  
which implies $(\frac{n}{p})(\frac{m}{p})=(\frac{nm}{p})$ .

**16**

There are unique $a_0$ and $h$ such that $f=hg+a_0$ , $\text{deg}a_0<m$ .  
By induction, $h$ can be written uniquely as $a_1+\cdots+a_kg^{k-1}$ , $\text{deg}a_i<m$ .  
Thus $f=a_0+a_1g+\cdots+a_kg^k$ , $\text{deg}a_i<m$ . Uniqueness also follows.

**17**

Remark:  
$f(x)=q(x)(x-a)+f_R(a)$  
$f(x)=(x-a)p(x)+f_L(a)$  
$f(x)$ has a right (left) factor $(x-a)$ iff the right (left) evaluation at $a$ is $0$ .     
This gives a most straightforward proof of Cayley-Hamilton thm.

## 2.12

**1**

$fg=0$ , then $f=0$ by integrity.

**2**

Both count to $q^{q^r}$ .

proof 2:  
Lagrange interpolation gives explicit construction.  
For every $a=(a_1,\cdots,a_r)\in F^{(r)}$ ,  
the polynomial function $\delta_a(x_1,\cdots,x_r)=\prod_1^r(1-(x_i-a_i)^{q-1})$  
takes $1$ at $a$ , $0$ everywhere else.  
Thus for any $f\in F^{F^{(r)}}$ , $f=\sum_{a\in F^{(r)}}f(a)\delta_a$ , a polynomial function.

**3,4**

Degree not increase for every monomial, so $\text{deg}f_0\le \text{deg}f$ .

Similar to thm 2.19 we can prove this $f_0$ is unique. 

**6**

$f_0$ is the "remainder" of $g$ , so by ex3, $\text{deg}f_0\le \text{deg}g$ .

**7**

If $f$ has only one zero point, by ex5 and ex6, $\text{deg}f\ge r$ .

Corollary:  
finite fields are **quasi-algebraically closed**.

$\color{red}{\text{norm n=r}}$  

Remark:  
A stronger theorem (**Chevalley-Warning**):  
Let $F$ be a finite field of char $p$ , $|F|=q$ ,  
let $\{f_i\}_{i=1}^k\subset F[x_1,\cdots,x_r]$ such that $r>\sum_i \text{deg}f_i$ .  
Then $p\mid N$ , where $N$ is the number of solutions of the $f_i(x_1,\cdots,x_r)=0$ system.
>Show $\sum_{x\in F}x^i=0$ if $0\le i<q-1$ ,  
>thus show $\sum_{x\in F^{(r)}}f(x)=0$ if $\text{deg}f<r(q-1)$ .  
>Then note $N\equiv\sum_{x\in F^{(r)}}\prod_i (1-f_i^{q-1}(x))\pmod p$ , which $=0$ by above.

Still a stronger version (Warning's second theorem):  
If $N>0$ , then $N\ge q^{r-\sum_i\text{deg}f_i}$ .

## 2.13

**1**

The leading term is $2x_1^2x_2^2x_3$ ,  
so suppose the sum $\Sigma=2p_2p_3+ap_1p_4+bp_5$ .  
$(1,1,1,1,1,0,\cdots)\leadsto 60=200+25a+b$ ,  
$(1,1,1,1,0,\cdots)\leadsto 24=48+4a$ .  
Thus $a=-6$ , $b=10$ .  

**2**

The leading term is $x_1^4x_2^2$ ,  
so suppose the sum $\Sigma=p_1^2p_2^2+ap_1^3p_3+bp_2^3+cp_1p_2p_3+dp_3^2$ .  
$(1,1,1)\leadsto 0=81+27a+27b+9c+d$  
$(1,1,0)\leadsto 0=4+b$  
$(1,1,-1)\leadsto 0=1-a-b+c+d$  
$(1,1,-2)\leadsto 0=-27b+4d$  
Thus $a=-4$ , $b=-4$ , $c=18$ , $d=-27$ .

**3**

For $1\le i,j\le n$ ,  
$p_is_j=\sum_{r_1<\cdots<r_i,r\ne}x_{r_1}\cdots x_{r_i}x_r^j+\sum_{r_1<\cdots<r_{i-1},r\ne}x_{r_1}\cdots x_{r_{i-1}}x_r^{j+1}$  
$ip_i=\sum_{r_1<\cdots<r_i,r\ne}x_{r_1}\cdots x_{r_i}x_r$  
thus  
$s_k-p_1s_{k-1}+p_2s_{k-2}-\cdots+(-1)^{k-1}p_{k-1}s_1+(-1)^kkp_k=0$ , $1\le k\le n$ .
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)

In (1), replace $n$ with $n+j$ , let $k=n+j$ , and let $x_{n+1}=\cdots x_{n+j}=0$ ,  
obtain  
$s_{n+j}-p_1s_{n+j-1}+\cdots+(-1)^np_ns_j=0$ , $j> 0$ . &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (2)

proof 2:  
>Let $f(x)=\prod_{i=1}^n(x-x_i)$ , then $f(x_i)=0$ , $x_i^jf(x_i)=0$ , which is  
>$x_i^{n+j}-x_i^{n+j-1}p_1+\cdots+(-1)^nx_i^jp_n$ , sum on $i$ we get (2) for $j\ge 0$ .
>
>Note the left side of (1) is a symmetric polynomial of degree $k$ ,  
>if it's not $0$ , then it's not $0$ after we let $x_{k+1}=\cdots=x_n=0$ , which is contra to (2) for $j=0$.

Remark:  
We see from (1), by induction, $k!p_k\subset \mathbb{Z}[s_1,\cdots,s_k]$ ,  
thus if $n!$ is invertible in $R$ , $\Sigma=R[s_1,\cdots,s_n]$ .  
>This is also necessary:  
>Suppose $p_m=f(s_1,\cdots,s_n)$ , let $x_i=0$ for $i>m$ and $=1$ for $i\le m$ ,  
>we get $1\in mR$ , $m$ is invertible in $R$.   
>Thus if $p_1,\cdots,p_n\in R[s_1,\cdots,s_n]$ , $n!$ must be invertible.

In this case the $s_i$ are also algebraically independent over $R$ .
>We know the $p_i$ are algebraically independent.  
>For polynomials in $\Sigma$ of a certain degree, $\prod p_i$ of same degree form a basis , $\prod s_i$ a generating set,  
>and they are equal in number. Since $R$ is commutative, the $\prod s_i$ form a basis as well.  
>Assemble all degrees we conclude $\prod s_i$ is a basis for the module $\Sigma$ .

## 2.14

Remark:

Without the divisor chain condition (ACCP) ,  
g.c.d condition $\not\Leftarrow$ primeness condition.  
$\color{red}{\text{example:}}$

Remark:

Let $M$ be a commutative and cancellable monoid.  
In this case if $a\mid b$ , $b=ax$ has a unique solution, we denote it by $b/a$ .
>If $[a,b]$ exists, then $(a,b)$ exists and $\sim ab/[a,b]$ ,  
>for $t\mid a,b \Leftrightarrow [a,b]\mid ab/t\Leftrightarrow t\mid ab/[a,b]$ .  
>The converse is not true,  
>in $\mathbb{Z}[\sqrt{-5}]$ , $(3,1+\sqrt{-5})=1$ , while $[3,1+\sqrt{-5}]$ does not exist.

>If $(ca,cb)$ exists, then $(a,b)$ exists and $\sim (ca,cb)/c$ ,  
>for $t\mid a,b \Leftrightarrow ct\mid ca,cb\Leftrightarrow t\mid (ca,cb)/c$ .  
>The converse is not true,  
>in $\mathbb{Z}[\sqrt{-5}]$ , $(3,1+\sqrt{-5})=1$ , while $(6,2+2\sqrt{-5})$ does not exist .

**1**

by above

**2**

$\bar u \bar v=\bar 1\leadsto \overline{uv}=1\leadsto uv=s$ a unit, thus $u$ is a unit and $\bar u =\bar 1$ .

$\bar a \bar x =\bar b \bar x\leadsto axs=bx\leadsto as=b\leadsto \bar a =\bar b$ .

Note $a_1\mid a_2\mid \cdots$ is stable iff $\overline{a_1}\mid \overline{a_2}\mid \cdots$ is stable,  
and $d=(a,b)$ iff $\bar d=(\bar a,\bar b)$ ,  
corresponding to chain condition and g.c.d. condition.

**3**

If $a\mid b$ and $b\nmid a$ then $N(a)<N(b)$ .

**4**

If $f\mid g$ , then $\text{deg}f\le\text{deg}g$ and the leading coefficients $|f_0|\le|g_0|$ ;  
when both equalities hold, $g\mid f$ .

**5**

Define $\text{deg}a=\text{max}\{\alpha_i\}$ ,  
then $(a)\subset(b)$ only if $\text{deg}a\ge \text{deg}b$ .

$(x^1)\subsetneq (x^{1/2})\subsetneq (x^{1/3})\subsetneq\cdots$ violates the divisor chain condition.

This domain satisfies the g.c.d. condition (in fact a Bezout domain):
>We can find $m$, such that $a,b\in F[x^{1/m}]\cong F[y]$ , a p.i.d.,  
>thus some $d=sa+tb$ that divides $a,b$ . 

Remark:

Another such example is the set of all $\color{red}{\text{algebraic integers}}$.

**7**

For $a=m+n\sqrt{10}\ne 0$ , define $N(a)=m^2-10n^2$ ;  
clearly $N(a)\ne 0$ , and $a$ is a unit iff $N(a)=\pm 1$ .  
Let $b$ be a nontrivial factor of $2$ in $\mathbb{Z}[\sqrt{10}]$ , then $N(b)\mid N(2)=4$ , $N(b)=\pm 2$ ;  
this is contra to $m^2-10n^2=\pm 2$ , $\leadsto m^2\equiv \pm 2 \pmod 5$ .  
Thus $2$ is irreducible, then note $2\mid \sqrt{10}\cdot\sqrt{10}$ but $2\nmid \sqrt{10}$ ,  
$2$ is not prime.

**Remark**: ( some cases $\mathbb{Z}[\sqrt d]$ not factorial )

Let $d$ be an integer that's not a square.  
Since every factorial domain is integral closed,  
if $d$ is not square free, $\mathbb{Z}[\sqrt d]$ is not factorial.

So suppose $d$ is square free.  
Consider $\sqrt{d}\sqrt{d}=2\cdot\frac{d}{2}$ or $(1+\sqrt d)(1-\sqrt d)=2\cdot\frac{1-d}{2}$ ,  
$2$ is not a prime.  
In case  
>$d<-2$ ,  
>or $d>0$ and has a prime factor $p\equiv 5\pmod 8$ ,  
>or $d>0$ and $d\equiv 1\pmod 4$ ,

$m^2-dn^2=\pm 2$ has no solution ,  
$2$ is irreducible,  
so $\mathbb{Z}[d]$ is not factorial.

**8**

$p=4n+1\leadsto (\frac{-1}{p})=1$ , thus $(\frac{-q}{p})=(\frac{q}{p})=-1$ .  
Similar to above, $q$ is irreducible but not prime. 

## 2.15

Remark of def 2.5 :

Suppose $\delta(a)$ is the minimum on $D\setminus 0$ ,  
let $1=sa+t$ , $\delta(t)<\delta(a)$ , so $t=0$ .  
Thus $\delta(0)<\delta(a)$ , and $a$ is a unit.  
Clearly $\delta(a)<\delta(b)$ if b is nonzero and not a unit.

Further, define $\Delta(d)=\text{min}\{\delta(cd)|c\ne 0\}$ ,  
then $\Delta$ is a Euclidean map satisfying $\Delta(b)\le\Delta(bc)$ , $c\ne 0$ .
>For $t\ne 0$ , $s\in D$ , let $\Delta(t)=\delta(ut)$ ,  
>suppose $s=qut+p$ , $\delta(p)<\delta(ut)$ ,  
>then $\Delta(p)\le\delta(p)<\delta(ut)=\Delta(t)$ .  

An unnormed $\delta$ on $\mathbb{Z}$ :  
$\delta(n)=\begin{cases}n&n\ge 0\\-n+1&n<0\end{cases}$

**2**

Mimic the proof of $\mathbb{Z}[i]$ ,  
$|\varepsilon^2-2\eta^2|\le 1/2<1$ .

Similarly $\mathbb{Z}[\sqrt{-2}]$ , $\mathbb{Z}[\sqrt 3]$ is Euclidean.

**3**

Mimic the proof of $\mathbb{Z}[i]$ ,  
first choose $\varepsilon\le 1/4$ , then an $\eta\le 1/2$ ,  
so $\varepsilon^2+3\eta^2\le 1/16+3/4<1$ .

Note $\mathbb{Z}[\sqrt{-3}]$ is not factorial.

**Remark**: ( when is $\mathbb{Z}[\sqrt d]$ Euclidean? )

By remark of 2.14 ex7,  
a necessary condition is  
$d$ being square free, $d\equiv 2,3\pmod 4$ and $d\ge -2$ .

>$\mathcal{O}_{\mathbb{Q}(\sqrt d)}$ is called **norm-Euclidean** if the absolute value of its norm is a Euclidean map;  
>it has been proved this is true iff  
>$d=−11,−7,−3,−2,−1,2,3,5,6,7,11,13,17,19,21,29,33,37,41,57,73$ .  
>By the fact $\mathcal{O}_{\mathbb{Q}(\sqrt d)}=\begin{cases}\mathbb{Z}[\sqrt d]&d\equiv 2,3\pmod 4\\ \mathbb{Z}[\frac{1+\sqrt d}{2}]&d\equiv 1\pmod 4\end{cases}$ ,  
>we conclude $\mathbb{Z}[\sqrt d]$ is norm-Euclidean iff  
>$d=−2,−1,2,3,6,7,11,19$ .

>$\mathcal{O}_{\mathbb{Q}(\sqrt{69})}$ is Euclidean but not norm-Euclidean.  
>$\mathbb{Z}[\sqrt{14}]$ is Euclidean but not norm-Euclidean.

**4**

Since $D$ is a p.i.d., $d=sa+tb$ ,  
so in $E$ , $e\mid a,b \Leftrightarrow e\mid d$ .

$D$ being a p.i.d. is crucial, for even in the factorial domain $\mathbb{Z}[x]$ ,  
g.c.d. of $2$ and $x$ is $1$ , while in the extension $\mathbb{Z}[x/2]$ it's $2\not\sim 1$ .

**6**

By remark at the beginning, for a general $\delta$ ,  
$\delta(0)$ is the only minimal,  
next is $\delta(a)$ for some unit $a$ , and $\delta(0)<\delta(a)$ ,  
and $\delta(a)<\delta(b)$ for all non-invertible $b\ne 0$ .

Then by (i),  
$\delta(0)=0$ ,  
$\delta(a)=1$ if $a$ is a unit,  
$\delta(a)>1$ otherwise.

A consequence of (ii) and $\delta(b)=\delta(-b)$ is  
(iii) if $\delta(a)>\delta(b)$ , then $\delta(a+b)=\delta(a)$ .

By (ii), $0\cup U(D)$ is a subfield, denote it by $F$ .

If $F\ne D$ , there's $x\in D$ , $\delta(x)>1$ and is minimal.  
For every $a\in D$ , there's $b$ , such that $a=bx+c$ , $\delta(c)\le 1$ .  
If $\delta(a)\le 1$ ，then $a\in F\subset F[x]$ ;  
otherwise $\delta(bx)>\delta(c)$ , and by (i)(iii), $\delta(b)<\delta(bx)=\delta(a)$ ,  
by induction assume $b\in F[x]$ , then so is $a$ .  
Thus $D=F[x]$ .  
By (iii), if $a$ is a polynomial of deg $n$ , then $\delta(a)=\delta(x)^n$ ;  
as a result, $x$ is transcendental.

**7**

$m^2=-1\pmod p\leadsto m^2+1=kp\leadsto (m+i)(m-i)=kp$ ,  
$(m\pm i)/p\notin \mathbb{Z}[i]\leadsto p$ is not prime.

**8**

$\mathbb{Z}[i]$ is factorial, so by ex7, $p$ is reducible.  
Then $p=(a+bi)(c+di)$ neither unit, $\leadsto p^2=(a^2+b^2)(c^2+d^2)$ ,  
$\leadsto a^2+b^2=p$ .

**9**

Let $a+bi$ be a prime, then so is $a-bi$ .  
So $N(a+bi)$ has at most 2 $\mathbb{Z}$-prime factors.  
Thus either $a^2+b^2=p$ , mod $4$ we get $p\equiv 1,2\pmod 4$ ;  
or $(a+bi)\sim p$ , by ex8 we get $p\equiv 3\pmod 4$ .

It's easy to show these are also sufficient.

**10**

In $\mathbb{Z}[i]$ , denote the mixed primes by $q$ , the pure by $p$ .

If $m=a^2+b^2$ , then  
$=(a+bi)(a-bi)$  
$=(\prod q_i\prod p_i)(\prod \overline{q_i}\prod p_i)$ , the factorization in $\mathbb{Z}[i]$  
$=\prod N(q_i)\prod p_i^2$ , the factorization in $\mathbb{Z}$ .

The converse is also clear.

**11**

$\begin{pmatrix}a_n\\0\end{pmatrix}=\begin{pmatrix}0&1\\1&-q_{n-1}\end{pmatrix}\cdots\begin{pmatrix}0&1\\1&-q_1\end{pmatrix}\begin{pmatrix}a_1\\a_2\end{pmatrix}$

**13**

$(f_1,f_2)=(1)\leadsto g\in(f_1,f_2)\leadsto g=u_2f_1+u_1f_2$ for some $u_1,u_2$ .  
Let $u_2=qf_2+r$ , where $\text{deg}r<\text{deg}f_2$ , $g=rf_1+(qf_1+u_1)f_2$ ;  
since $\text{deg}g<\text{deg}f$ , $\text{deg}(qf_1+u_1)<\text{deg}(f_1)$ .  
Then $g/f=(qf_1+u_1)/f_1+r/f_2=v_1/f_1+v_2/f_2$ , $\text{deg}v_i<\text{deg}f_i$ .

By induction, if $f=\prod f_i$ , $f_i$ coprime pairwisely, and $\text{deg}g<\text{deg}f$ ,  
then there are $g_i$ , $g/f=\sum g_i/f_i$ , $\text{deg}g_i<\text{deg}f_i$ .

**14**

Suppose $\text{deg}g<\text{deg}p^e$ ,  
then there are $a_{e-1}$ , $\text{deg}a_{e-1}<\text{deg}p$ , and $r$ , $\text{deg}r<\text{deg}p^{e-1}$ ,  
such that $g=a_{e-1}p^{e-1}+r$ .  
By induction,  
$g=a_0+a_1p^1+\cdots+a_{e-1}p^{e-1}$ , $g/p^e=a_0/p^e+a_1/p^{e-1}+\cdots+a_{e-1}/p$ , $\text{deg}a_i<\text{deg}p$ .

**16**

In ex13, $\sum g_i/f_i=0$ , $\leadsto g_j\frac{f}{f_j}=-\sum_{i\ne j}g_i\frac{f}{f_i}\leadsto f_i\mid g_i\leadsto g_i=0$ , unique.

In ex14, $a_0+a_1p^1+\cdots+a_{e-1}p^{e-1}=0\leadsto a_0=0\leadsto a_1=0\leadsto\cdots\leadsto a_{e-1}=0$ , unique.

So also ex15 is unique.

**17**

If $n=1$ , $\sum_{d\mid n} \mu(d)=\mu(1)=1$ ;  
otherwise suppose $n$ has $k$ distinct prime factors,  
$\sum_{d\mid n} \mu(d)=\sum_j \binom{k}{j}(-1)^j=(1-1)^k=0$

**18**

$\sum_{d\mid n}\mu(n/d)g(d)=\sum_{d\mid n}\mu(n/d)\sum_{k\mid d}f(k)$  
$=\sum_{k\mid n}f(k)\sum_{d\mid \frac{n}{k}}\mu(d)=f(n)$

**19**

Count elements of each order in $C_n$ to get $n=\sum_{d\mid n}\varphi(d)$ ;  
by ex18, $\varphi(n)=\sum_{d\mid n}\mu(n/d)d$ .

**20**

The number of monic quadratics is $q^2$ ,  
$q+q(q-1)/2$ of them have a root, so $q(q-1)/2$ of them are irreducible.

The number of monic cubics is $q^3$ ,  
$q^2(q-1)/2+q(q-1)(q-2)/6+q(q-1)+q$ of them have a root, i.e., reducible,  
so $q(q^2-1)/3$ irreducible. 

The method using Mobius inversion needs the fact  
$x^{q^n}-x$ is the product of all monic irreducible polynomials of degree dividing $n$ .  
$\leadsto q^n=\sum_{d\mid n} N(d)d\leadsto nN(n)=\sum_{d\mid n}\mu(n/d)q^d$


## 2.16

**1**

By corollary of p154, any monic linear factor of $f(x)$ in $F[x]$ is contained in $D[x]$ ,  
thus a root in $F$ is in fact in $D$ .

i.e., **factorial domains are integral closed**.  
In fact, g.c.d. domains are integral closed:
>Suppose a monic polynomial $\in D[x]$ has a root in $F$ ,  
>by g.c.d. condition we assume it's a reduced fraction $a/b$ .  
>Since g.c.d condition implies primeness condition, every irreducible factor of $b$ divides $1$ ,  
>so $b\sim 1$ , $a/b\in D$ .

$\mathbb{Z}[\sqrt{-3}]$ is not integral closed;  
$\mathbb{Z}[\frac{1+\sqrt{-3}}{2}]$ is, since it's Euclidean.  
$x^2+x+1$  

**2**

**Eisenstein's criterion**

Let $D$ be a domain, $P$ any prime ideal,  
$f(x)=a_nx^n+\cdots+a_0\in D[x]$ , such that  
$a_n\notin P$ ,  
$a_i\in P$ if $i<n$ ,  
$a_0\notin P^2$ .

Suppose $f(x)=f_1(x)f_2(x)$ , $f_i(x)\in D[x]$ ;  
mod $P$ , $\leadsto \overline{a_n}x^n=\overline{f_1(x)}\cdot\overline{f_2(x)}$ .  
Since $a_0\notin P^2$ , suppose, say, $\overline{f_1(x)}$ has non-zero constant term.  
$D/P$ is a domain, so $\overline{f_2(x)}$ has lowest term of degree $n$, i.e., $\text{deg}f_2(x)=n$ .  

So $f(x)$ has no degree-decreasing factorization in $D[x]$ .

If in addition $D$ is factorial, $f(x)$ is irreducible in $\text{Frac}(D)[x]$ .

**Extended Eisenstein**:

Let $D$ be a domain, $P$ any prime ideal,  
$f(x)=a_nx^n+\cdots+a_0\in D[x]$ , such that  
$a_i\in P$ for $i<k$ , $a_k\notin P$ , $a_0\notin P^2$ ,  
then $f(x)$ has some irreducible factor with degree $\ge k$ .
>Suppose $f=f_1f_2\cdots f_m$ , mod $P$ $\leadsto \overline{a_n}x^n+\cdots+\overline{a_k}x^k=\bar f_1 \bar f_2\cdots \bar f_m$ ,  
>no two of $\bar f_i$ have zero constant term,  
>thus some $\bar f_j$ has lowest term of degree $k$ , and hence $\text{deg}f_j\ge k$ .

**3**

$x\to x+1$ is an automorphism of $\mathbb{Q}[x]$ preserving deg,  
under which $\frac{x^p-1}{x-1}\to \frac{(x+1)^p-1}{x+1-1}=x^{p-1}+\binom{p}{p-1}x^{p-1}+\cdots+\binom{p}{1}$ .  
Since $p\mid \binom{p}{k}$ for $k\ne 0,p$ , the RHS is irreducible in $\mathbb{Q}[x]$ by Eisenstein;  
so is $\frac{x^p-1}{x-1}$ .

**4**

By ex3, $x^p-1\to(x-1)(x^{p-1}+\cdots+1)$ .

$(x^{2p}-1)=(x^p-1)(x^p+1)$ .  
If $p=2$ , $x^2+1$ is irreducible by $x=y+1$ Eisenstein,  
thus $x^4-1\to (x-1)(x+1)(x^2+1)$ .  
If $p\ne 2$ , let $x=-y$ , then $x^p+1=-(y^p-1)$ ,  
thus $x^{2p}-1\to (x-1)(x^{p-1}+\cdots+1)(x+1)((-x)^{p-1}+\cdots+1)$ .

The remaining are

$x^8-1\to (x-1)(x+1)(x^2+1)(x^4+1)$ ,  
where $x^4+1$ is irreducible by $x=y+1$ Eisenstein.

$x^9-1\to (x-1)(x^2+x+1)(x^6+x^3+1)$ ,  
where $x^6+x^3+1$ is irreducible by $x=y+1$ Eisenstein.

**Remark**:  
$x^n-1=\prod_{d\mid n} \Phi_d(x)$

**5**

$(k,x)$ is not principal for non-unit $k\in D$ .

Remark:  
factorial $\Leftrightarrow$ g.c.d & ACCP  
p.i.d. $\Leftrightarrow$ Bezout & ACCP

**6**

$\leadsto f(x)$ is irreducible in $F[t][x]$  
$\leadsto$ also in $F(t)[x]$

## 2.17

**1**

$a+b-ab=0$  
$\Leftrightarrow (1-a)(1-b)=1$ in $\mathbb{Z}\times R$  
$\Leftrightarrow 1-a$ has a right inverse in $\mathbb{Z}\times R$ .

**2**

Denote the special one by $e$ .  
$\leadsto 1-e$ not right invertible $\leadsto (1-e)(1-a)$ not right invertible  
$\leadsto (1-e)(1-a)=1-e\leadsto ea=a$ .

If $(1-a)(1-e)\ne (1-e)$ , it has a right inverse $1-b$ ,  
$\leadsto(1-a)(1-e)=(1-a)(1-e)(1-b)=1$ ,  
$\leadsto(1-a)(1-e)=(1-e)$ , contradiction.  
$\leadsto (1-a)(1-e)=(1-e)\leadsto ae=a$ .

Thus $e$ is the unit of $R$ .  

Note $a+b-ab=0\leadsto (e-a)(e-b)=e$ ,  
so every nonzero $a\in R$ is right invertible, thus invertible.

**3**

Since $ka=0$ for all $a\in R$ , the multiplication of $S_k$ is well-defined;  
$(S_k,+,\cdot,0,1)$ is a ring of char $k$ .  
$a\to (\bar 0,a)$ is the embedding.

**4**

Embed $R$ into $S$ ,  
then $(k,a)(0,b)=(0,0)$ .  

Suppose $(0,c)(k,a)=(0,x)$ ,  
then $(0,x)(0,b)=(0,0)\leadsto xb=0\leadsto x=0$ .  
$\leadsto (0,c)(k,a)=(0,0)$ for all $c$ .

Let $c=b$ , $\leadsto (0,b)(k,a)=(0,0)$ ,  
similarly $\leadsto (k,a)(0,c)=(0,0)$ for all $c$ .

**5**

If $R=0$ , $S=Z$ , the assertion holds;  
suppose $R\ne 0$ .

Let $s\in S$ , $z\in Z$ , $a\in R$ ,  
then $sa\in R$ , $sza=zsa=0$ ,  
so $Z$ is an ideal.  

Let $xy\in Z$ .  
If $y\notin Z$ , there's $a\in R$ , $ya\ne 0$ , $xya=0$ ;  
by ex4, $x\in Z$ .  
So $S/Z$ is a domain since $R\ne 0$ , $Z\ne S$ . 

$R\cap Z=0$ , so $R\to S\to S/Z$ is an embedding.

# ch3

## 3.1

**1**

It's a group under $+$ ,  
a semigroup (in fact a monoid) under $\times$ ,  
right distributive, $(\eta+\zeta)\phi=\eta\phi+\zeta\phi$ ;  
i.e., a right **near-ring**.

**4**

$\cong \mathbb{Q}$

**5**

In thoes cases, $R=\mathbb{Z},\mathbb{Z}/(n),\mathbb{Q}$ ,  
for every $f\in \text{End}R$ , $f(x)=f(1)x$ ,  
thus $\text{End}R=R_L\cong R$ .

This does not hold in general, even for a field:  
$(\mathbb{F}_4,+,0)\cong (\mathbb{Z}_2^{(2)},+,0)$ , $\text{End}(\mathbb{F}_4,+,0)\cong M_2({\mathbb{Z}_2})\not\cong \mathbb{F}_4$ ;  
$(\mathbb{Q}(\sqrt 2),+,0)\cong(\mathbb{Q}^{(2)},+,0)$ , $\text{End}(\mathbb{Q}(\sqrt 2),+,0)\cong M_2(\mathbb{Q})\not\cong\mathbb{Q}(\sqrt 2)$ .

## 3.2

**1**

$S\to R\to \text{End}M$

**2**

$R\to \text{End}M$ factors through $R/C$ .

**3**

Remark:  
SR  
RI  
SI

**5**

$(\lambda^n-1)$

**6**

There's only one homomorphism of $\mathbb{Z}$ into any ring;  
in particular, into $\text{End}M$ .

**7**

There's at most one homomorphism of $\mathbb{Q}$ into any ring;  
in particular, into $\text{End}M$ .

**8**

$M$ finite $\leadsto \text{End}M$ finite.  
There's no homomorphism of $\mathbb{Q}$ into a finite ring since it must be injective.

## 3.3

**1**

$\cong \mathbb{Z}/(n)$  
$\cong 0$

**2**

If $\frac{n}{(m,n)}\mid k$ , $f(\bar l)=l\cdot \bar k$ is a well-defined homomorphism.

On the other hand, any $f\in \text{Hom}$ is of the form $f(\bar l)=f(l\bar 1)=lf(\bar 1)=l\cdot \bar d$ ,  
satisfying $m\bar d=\bar 0$ , $\leadsto \frac{n}{(m,n)}\mid d$ .

Thus $\text{Hom}\cong (\mathbb{Z}/(m,n),+)$ .

**4**

$\text{Hom}(R,M)=\{\mu_x:r\to rx\mid x\in M\}$

$(M,+)\cong \text{Hom}(R,M)$ via $x\to \mu_x$

**6**

iff $a\in C(R)$

**7**

Suppose $M$ is irreducible, $x\in M\setminus 0$ ;  
the submodule $Rx\ne 0$ , so $Rx=M$ .

Conversely, $L\supset Rx=M$ .

**8**

By the correspondence theorem, $R/I$ is irreducible iff $I$ is maximal.

$M=R/I$ & $I$ maximal $\leadsto M$ irreducible.  
$M$ irreducible $\leadsto M=Rx\cong R/\text{ann}(x)$ & $\text{ann}(x)$ maximal.

**9**

A nonzero $f:M_1\to M_2$  
$\leadsto \text{ker}f=0$ , $\text{im}f=M_2\leadsto f$ is bijective.

## 3.4

**1**

Let $f=Ae$ .

If $f$ is a base for $R^{(n)}$ , there's $B$ , $e=Bf$ .  
Then $ABf=f$ , $BAe=e$ , so $AB=1_m$ , $BA=1_n$ .

Conversely suppose there's $B$ such that $AB=1_m$ , $BA=1_n$ .  
Then $e=BAe=Bf$ , $f$ is a generating set;  
$xf=0\leadsto xAe=0\leadsto xA=0\leadsto x=xAB=0$ , $f$ is independent.

As a result, $R^{(m)}\cong R^{(n)}$  
iff $R^{(n)}$ has a base of cardinality $m$  
iff some $A$ , $B$ satisfy $AB=1_m$ , $BA=1_n$ .

proof2:  
By anti-isomorphism,  
$R^{(m)}\cong R^{(n)}\Leftrightarrow \eta\zeta=1$ , $\zeta\eta=1$ , $\Leftrightarrow AB=1$ , $BA=1$ .

**Remark:**

$R$ has (left) **IBN** : $R^m\cong R^n$ as left modules $\Rightarrow m=n$ .

Two corollaries of the ex:  
C1: Left IBN and right IBN are equivalent.  
C2: Let $R\to S$ be a ring homomorphism, then if $S$ has IBN, so does $R$ .

examples:  
(1) Division rings.
>From linear algebra.

(2) Nonzero Commutative rings.
>Let $\mathfrak m$ be a maximal ideal, then $R\to R/\mathfrak m$ , a field. Then by (1) and C2.  
>( This is an alternative proof from the text; when applied to a general ring,  
>$R/\mathfrak m$ is not necessarily division, only simple. )

(3) Local rings.
>$R/\mathfrak m$ a division ring

(4) Finite rings.
>$R^m\cong R^n\leadsto|R^m|=|R^n|$

**2**

$\eta(f_i)=\eta(\sum p_{ij}e_j)=\sum p_{ij}\eta(e_j)=\sum p_{ij}a_{jk}e_k=\sum p_{ij}a_{jk}q_{kl}f_l$ , where $(q_{ij})=P^{-1}$ .  
Thus $[\eta]_f=PAP^{-1}$ .

**3**

Let $\eta\to A$ , $\zeta\to B$ ,  
then $\zeta\eta(e_i)=\zeta(\sum e_ja_{ji})=\sum \zeta(e_j)a_{ji}=\sum (e_k b_{kj})a_{ji}=\sum e_k (b_{kj}a_{ji})$ ,  
so $\zeta\eta\to BA$ .

**4**

Since $R$ is commutative, use ex3, let $\eta\to A$ .  
$\eta$ surjective $\leadsto$ exits $B\in M_n(R)$ , $AB=1_n\leadsto BA=1_n$ .  
So $A$ , and hence $\eta$ is bijective.

Injective $\not\leadsto$ bijective,  
e.g., let $R=\mathbb{Z}$ , $\eta=2_L$ .  
In fact,  
$\eta$ injective $\leadsto \text{det}\eta$ not zero-divisor $\not\leadsto \text{det}\eta$ invertible. Cf., ex6.

**5**

Since $R$ is commutative, $a\eta\in \text{Hom}(M,N)$ ,  
$\text{Hom}(M,N)$ is then an $R$-module.

For arbitrary $R$ ,  
$\text{Hom}(R^m,R^n)$ always has a (left) module structure, induced by that of $M_{m,n}(R)$ ,  
i.e, $a\eta(x)=\eta(xa)$ .

**Remark**:  
If $M$ is a R-**bimodule**, $\text{Hom}(M,N)$ has a left module structure  
$a\eta(x)=\eta(xa)$ ;  
If $N$ is a R-bimodule, right,  
$a\eta(x)=\eta(x)a$ .

**6**

(1)  
**Theorem** (McCoy)  
$xA=0$ has nonzero solution $x\in M_{1,n}(R)\Leftrightarrow \text{det}A$ is a zero-divisor.

$(\Rightarrow)$  
Clear from $A\text{adj}A=1_n\text{det}A$ .

$(\Leftarrow)$  
Let $k$ be the largest integer such that there's no $r\in R\setminus 0$ annihilating all $k$-minors of $A$ .  
It's clear $0\le k<n$ .  
If $k=0$ , some $r\ne 0$ kills all $a_{ij}$ , $x=r(1,\cdots,1)\ne 0$ is a solution.  
Otherwise $0<k<n$ , some $r$ kills all $(k+1)$-minors but leaves some $k$-minor.  
WLOG, assume the $k$-minor is the first $k\times k$ block.  
Let $B$ be the first $(k+1)\times (k+1)$ matrix,  
denote cofactors with respect to elements of its last column by $B_i$ .  
Note $x=r(B_1,\cdots,B_{k+1},0,\cdots,0)\ne 0$ is a solution.

(2)  
$f=Ae\leadsto \text{det}Ae=\text{adj}Af\leadsto \text{det}Ae_i\in K$ ,  
thus $\text{det}Ax\in K$ , $\text{det}A\bar x=0$ .

Corollary1:  
$A$ is right zero-divisor $\Leftrightarrow$ $\text{det}A$ is zero-divisor $\Leftrightarrow$ $A$ is left zero-divisor.  

Corollary2:  
Let $A\in M_{m,n}(R)$ , where $m>n$ , then $xA=0$ has nonzero solution.
>Adding zero columns.

**Corollary3**:  
$R^{(m)}\to R^{(n)}$ injective $\Rightarrow m\le n$ .  
$R^{(m)}\to R^{(n)}$ surjective $\Rightarrow m\ge n$ .

**Corollary4**:  
Let $m<\infty$ be the number of a generating set, $n$ be that of a independent set.  
Then $m\ge n$ ; if $m=n$ , the module is free.
>Let $g$ be the generating set; $i$ be the independent set, $i'$ be a finite subset of cardinality $n'$ .
>
>Let $i'=Ag$ , $A\in M_{n',m}(R)$ ,  
>$i'$ independent $\leadsto xA=0$ has no nonzero solution $\leadsto m\ge n'$ .  
>Since $i'$ is arbitrary, $m\ge n$ .
>  
>If $m=n$ , let $i=Bg$ , $B\in M_n(R)$ ,  
>$\text{det}B$ is not a zero-divisor $\leadsto x\text{adj}B=0$ has no nozero solution.  
>Then from $\text{adj}Bi=g\text{det}B$ , conclude $g$ is independent, thus a base.

## 3.5

**3**

All submodules of $\mathbb{Z}/(p^e)$ form a chain, so every two $\ne 0$ are dependent.

$mn\mathbb{Z}\subset m\mathbb{Z}\cap n\mathbb{Z}$ , so every two nonzero submodules of $\mathbb{Z}$ are dependent.

By CRT, $\mathbb{Z}/(\prod p_i^{e_i})\cong\bigoplus_i \mathbb{Z}/(p_i^{e_i})$ .



**4**

$\pi_i:m=(m_1,m_2)\to m_i$

**5**

$m=m-gf(m)+gf(m)\in \text{ker}f+\text{Im}g$ .

Let $g(r)\in \text{ker}f$ , then $r=fg(r)=0$ , so $g(r)=0$ .

Corollary:  
Let $f\in \text{End}M$ such that $f^2=f$ ,  
then $g:\text{Im}f\to M$ , $f:M\to \text{Im}f$ , $fg=1$ ,  
so $M=\text{ker}f\oplus\text{Im}g$ .

## 3.6

Remark:

Let $R$ be commutative, submodules of $R^{(n)}$  
need not be finitely generated:
>$I=\langle X_1,X_2,\cdots \rangle \subset \mathbb Z[X_1,X_2,\cdots]=R$ is a submodule of the $R$-module $R^{(1)}$,  
>and is not finitely generated.

need not be free:
>For a domain $R$ , an ideal is free as a $R$-submodule iff it's principal;  
>thus $I=\langle X,2 \rangle\subset \mathbb{Z}[X]$ is not free.

**1**

$\begin{bmatrix}1&0&-1\\2&-3&1\\0&3&1\\3&1&5\end{bmatrix}\leadsto
\begin{bmatrix}1&0&-1\\0&-3&3\\0&3&1\\0&1&8\end{bmatrix}\leadsto
\begin{bmatrix}1&0&-1\\0&0&4\\0&3&1\\0&1&8\end{bmatrix}\leadsto
\begin{bmatrix}1&0&-1\\0&0&4\\0&3&1\\0&1&0\end{bmatrix}\leadsto
\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\\0&0&0\end{bmatrix}\leadsto
\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$

**2**

$\begin{bmatrix}2\lambda-1&\lambda&\lambda^2+3\\\lambda&\lambda&\lambda^2\\\lambda+1&2\lambda&2\lambda^2-3\end{bmatrix}\leadsto
\begin{bmatrix}\lambda-1&0&3\\\lambda&\lambda&\lambda^2\\-\lambda+1&0&-3\end{bmatrix}\leadsto
\begin{bmatrix}\lambda-1&0&3\\\lambda&\lambda&\lambda^2\end{bmatrix}$

**3**

$\begin{bmatrix}3&-3&1\end{bmatrix}$

## 3.7

Remark:

Let $D$ be a PID, $A\in M_{m,n}(D)$ .  
Define the **row rank** as rank of the submodule generated by the rows,  
which $=$ dimension of the vector space spanned by rows over $\text{Frac}D$ .  
(so also $=$ the size of any maximal independent set of the rows)  

Thus by results on a field,  
**row rank = column rank = determinantal rank**.

**1**

$\text{diag}\{1,1,1,610\}$

**2**

$\text{diag}\{1,1,\lambda-1,(\lambda+1)(\lambda-1)^2\}$

**3**

$\Delta _1=1$ , $\Delta _2=\lambda-1$ , $\Delta _3=(\lambda-1)^3$   
$d_1=1$ , $d_2=\lambda-1$ , $d_3=(\lambda-1)^2$

**4**

Let $A$ be invertible.  
$QAP$ in normal form, where $P,Q$ are products since Euclidean.  
$QAP$ is invertible, so its invariant factors are units,  
so $D_n\cdots D_1QAP=1_n$ .  
Then $A=Q^{-1}D_1^{-1}\cdots D_n^{-1}P^{-1}$ is a product of elementary matrices.

$P_{ij}=D_j(-1)T_{ij}(1)T_{ji}(-1)T_{ij}(1)$ .

**5**

If $A$ is invertible,  
there are $P_i$ of type I, $P_1\cdots P_kA=\text{diag}\{1,\cdots,1,\text{det}A\}$ .  
So $A=P_k^{-1}\cdots P_1^{-1}\text{diag}\{1,\cdots,1,\text{det}A\}$ . 

Similarly for any Euclidean domain.

**6**

By multiplying matrices of type (26) on the right,  
$(a_1,\cdots,a_n)\leadsto(d_{12},0,a_3\cdots,a_n)\leadsto(d_{123},0,0,a_4\cdots,a_n)\leadsto\cdots$  
$\leadsto(d_{1\cdots n},0,\cdots,0)=(d,0,\cdots,0)$ .

**7**

By ex6, $(a_1,\cdots,a_n)Q=(1,0,\cdots,0)$ ,  
so $(a_1,\cdots,a_n)$ is the first row of $Q^{-1}$ .

**8**

Can choose $P$ to be a product of type I.

**9**

$A\leadsto PAQ$ normal,  
which has the same invariant factors with $(PAQ)^t=Q^tA^tP^t\leadsto A^t$ .

**10**

(iii) $(T_{ij}(a),T_{jk}(b))=T_{ik}(ab)$

## 3.8

**1**

$\mathbb{Z}$

**2**

$PAQ=\begin{pmatrix}1&&\\&6&\\&&24(1+4i)\end{pmatrix}$ ,  
$|M|=6^2\times24^2(1^2+4^2)=352512$ .

Remark:

Regard $\mathbb{Z}[i]$ as a $\mathbb{Z}$-module.  
$(a+bi)\mathbb{Z}[i]\cong\mathbb{Z}(a+bi)+\mathbb{Z}(ai-b)$ , i.e., a submodule generated by $a+bi$ and $ai-b$ .  
relations matrix $A=\begin{pmatrix}a&b\\-b&a\end{pmatrix}\leadsto PAQ=\begin{pmatrix}d_1&0\\0&d_2\end{pmatrix}$ ,  
where $\text{det}P,\text{det}Q=\pm 1$ , so $a^2+b^2=|d_1d_2|$ .  
So in case either $a,b\ne 0$ ,  
$|\mathbb{Z}[i]/(a+bi)\mathbb{Z}[i]|=|d_1d_2|=a^2+b^2$ .

This is evident from ... lattice

**3**

Every two elements are linear dependent,  
so there's at most 1 direct summand;  
which contradicts that $(2,x)$ is not principal.

**4**

It's clear $\text{ann }x\subset\text{ann }(x+N)$ , equality holds iff $Dx\cap N=0$ .  
$\leadsto (d_1)\subset(d_2)\leadsto d_2\mid d_1\leadsto$ since $l(0)=\infty$ , $l(x)\ge l(x+N)$ .

**5**

A direct result of p108 ex7. (no circular reasoning is involved)

The hint is another proof of ex7.  
in matrix form

$\begin{bmatrix}a_1&d&&&\\*&*&&&\\&&1&&\\&&&\ddots&\\&&&&1\end{bmatrix}\begin{bmatrix}1&&&\\&a_2'&\cdots &a_n'\\&\vdots&\ddots &\vdots\\&*&\cdots &*\end{bmatrix}$

**6**

Let $M$ be a module generated by at least $n$ elements,  
prove the theorem by induction on $n$ ,  
$n=1$ is clear.

Let $\{x_1,\cdots,x_n\}$ be a set of generators such that  
$l(x_1)$ is minimal for all sets of $n$ generators.  
Let $N=\sum_2^n Dx_i$ , so $M=Dx_1+N$ .  
Suppose $Dx_1\cap N\ne 0$ , so $l(x_1+N)<l(x_1)$ by ex4;  
let $\text{ann }(x_1+N)=(a_1)$ , $a_1x_1+a_2x_2+\cdots+a_nx_n=0$ , note $a_1x_1\ne 0$ .  
Let $d=(a_1,\cdots,a_n)$ , then $(a_1/d,\cdots,a_n/d)=1$ .  
By ex5, there's a generating set $\{y_1,\cdots,y_n\}$ such that $y_1=\sum_1^n\frac{a_i}{d}x_i$ .  
Note $dy_1=0$ , thus $l(y_1)\le l(d)\le l(a_1)<l(x_1)$ , contra to the choice of $x_1$ .  
Thus $Dx_1\cap N=0$ and $M=Dx_1\oplus N$ .

Since $N$ is generated by at least $n-1$ elements,  
by induction, $N=\bigoplus_2^n Dz_i$ , $\text{ann }z_2\supset\cdots\supset\text{ann }z_n$.

Suppose $\text{ann }x_1=(d_1)\not\supset\text{ann }z_2=(d_2)$ .  
Then $d=(d_1,d_2)\ne 0$ , $l(d)<l(d_1)$ .  
There's a generating set $\{y_1,\cdots,y_n\}$ , where $y_1=\frac{d_1}{d}x_1+\frac{d_2}{d}z_2$ , and $dy_1=0$ .  
Again contradicts. Thus if let $z_1=x_1$ ,  
$M=\bigoplus_1^n Dz_i$ , $\text{ann }z_1\supset\cdots\supset\text{ann }z_n$.

## 3.9

**1**

$(\lambda+2)$ , $(\lambda-1)$ , $(\lambda-1)^3$ , $(\lambda^2+1)^2$ , $(\lambda^2+1)^2$ , $(\lambda^2+1)^4$ ;  
$(\lambda^2+1)^2$ , $(\lambda-1)(\lambda^2+1)^2$ , $(\lambda+2)(\lambda-1)^3(\lambda^2+1)^4$ .

**2**

Irreducible $\Leftrightarrow M=Dx$ , $\text{ann }x$ a maximal ideal,  
(since $M$ is torsion, $\text{ann }x\ne 0$) i.e., $\text{ann }x=(p)$ .

(Regard $0$ as elementary factor)  
Indecomposable $\Leftrightarrow$ has only 1 elementary factor $\Leftrightarrow M=Dx$ , $\text{ann x}=0$ or $(p^e)$ . 

**3**

Let $k$ be number of $0$ in invariant factors of $K$ ,  
then $\text{rank}K=n-k$ , $\text{rank}(D^{(n)}/K)=k=n-\text{rank}K$ .

$N=\frac{H}{K}$ , $M/N=\frac{D^{(n)}/K}{H/K}\cong D^{(n)}/H$ .  
$K\subset H\subset D^{(n)}$ are all free of finite rank, so by the foregoing  
$\text{rank}M/N=\text{rank}D^{(n)}/H=n-\text{rank}H$  
$=(n-\text{rank}K)-(\text{rank}H-\text{rank}K)=\text{rank}M-\text{rank}N$ .

**4**

$p^kM_p/p^{k+1}M_p\to p^k\overline{M_p}/p^{k+1}\overline{M_p}$ is onto, so dim $\ge$ dim.  
Denote elementary factors of $M_p$ and $\overline{M_p}$ by  
$p^{e_1},\cdots,p^{e_{n_p}}$ and $p^{f_1},\cdots,p^{f_{m_p}}$ , where $e_1\le\cdots\le e_{n_p}$ and $f_1\le\cdots\le f_{m_p}$ ,  
then $m_p\le n_p$ and $f_{m_p-k}\le e_{n_p-k}$ for all $k$ .

Since $\overline{M_p}\subset\overline M_p$ , so $\overline M=\bigoplus_p \overline{M_p}$ , and $\overline{M_p}=\overline M_p$ .  
Combine all primary parts, get  
$t=\text{max}_pm_p\le \text{max}_pn_p=s$ ,  
$\prod_p p^{e_{m_p-i}}\mid \prod_p p^{f_{n_p-i}}\leadsto \bar d_{t-i}\mid d_{s-i}$ .  
(where only positive indices on $f,e$ are counted)

**5**

Let $B$ , $AB$ be relations matrices of submodules $H\supset K$ respectively.  
$\text{det}AB\ne 0$ , so $D^{(n)}/K$ is a torsion module, with $D^{(n)}/H$ a homomorphic image.  
By ex4, $b_i\mid c_i$ .  
Take transpose, $a_i\mid c_i$ .

proof2:  
We can assume one of $A,B$ , say $A$ , is in normal.  
Then clearly $c_1\cdots c_{k-1}a_k$ divides every $k$-minor of $AB$ , hence divides $c_1\cdots c_k$ .  
If $c_k=0$ , $a_k\mid c_k$ ; otherwise $c_1\cdots c_{k-1}\ne 0$ , $a_k\mid c_k$ as well.  
Similarly $b_i\mid c_i$ .  

**Remark:**  
$a_i\mid c_i$ proves ex6,  
$b_i\mid c_i$ proves ex4.  
These hold for $M$ not necessarily torsion since proof2 does not require $\text{det}AB\ne 0$ .

**6**

By ex5

**7**

Let $M=N\oplus H$ , if $ax=y$ , where $x=n+h\in M$ ,  
then $an=y$ .

If $N$ is a pure submodule, and $\text{ann }(x+N)=(d)$ ,  
then $dx=n\in N$ , there's $n'\in N$ such that $dn'=n$ .  
Let $x'=x-n'$ , then $dx'=0$ .  
Since $\text{ann }(x+N)\subset \text{ann }x'$ , $\text{ann }x'=(d)$ .

**8**

$M/N$ is also a f.g. torsion module, suppose it $=\oplus_i D(x_i+N)$ ;  
by ex7, assume $\text{ann }(x_i+N)=\text{ann }x_i$ .  
Clearly $M=N+\sum_i Dx_i$ .  
Let $n+\sum_i c_ix_i=0\leadsto \sum_ic_i(x_i+N)=0\leadsto c_i(x_i+N)=0$  
$\leadsto c_ix_i=0$ . So $M=N\oplus \sum_i Dx_i$ .

**9**

Let $\text{ann} z=(d)$ .  
Suppose $ax=cz$ , it's enough to prove $awz=cz$ for some $w\in D$ ;  
$\Leftrightarrow aw-c\in (d)\Leftrightarrow (a,d)\mid c$ .  
This is true since $ax=cz\leadsto 0=\frac{d}{(a,d)}ax=\frac{cd}{(a,d)}z\leadsto (a,d)\mid c$ .

For non-torsion module, $(d)=0$ ,  
$2\mathbb{Z}\subset\mathbb{Z}$ is not pure.

## 3.10

**1**

$360=2^33^25$  
$n(3)n(2)n(1)=3\times 2\times 1=6$

**2**

$d_1\cdots d_k=d$  
$|\mathbb{Z^{(n)}}/K|=\prod |\mathbb{Z}^{(n)}/d_i\mathbb{Z}^{(n)}|=\prod d_i=d$

**3**

Regard $\mathbb{Z}[i]$ as a $\mathbb{Z}$-module, $\{1,i\}$ is a base.  
$(a+bi)$ is a submodule with relations matrix $A=\begin{pmatrix}a&b\\b&-a\end{pmatrix}$ , $\text{det}A\ne 0$ .  
By ex2, $|\mathbb{Z[i]}/(a+bi)|=|\text{det}A|$ .

Cf., 3.8 ex2.  

**4**

Note $QAQ^{-1}=\begin{pmatrix}1&&&\\&1&&\\&&&1\\&&-1&-2\end{pmatrix}$ , where $Q=\begin{pmatrix}1&&&\\&1&&\\2&3/2&1&\\0&-1/2&&1\end{pmatrix}$ .

So $V\cong \mathbb{Q}[\lambda]z_1\oplus \mathbb{Q}[\lambda]z_2\oplus \mathbb{Q}[\lambda]z_3$ , $\text{ann} z_1=\text{ann }z_2=(\lambda-1)$ , $\text{ann }z_3=((\lambda+1)^2)$ .

Thus Jordan form $PAP^{-1}=\begin{pmatrix}1&&&\\&1&&\\&&-1&1\\&&&-1\end{pmatrix}\Leftarrow P=\begin{pmatrix}1&&&\\&1&&\\2&3/2&1&\\2&1&1&1\end{pmatrix}$ ,

rational form $RAR^{-1}=\begin{pmatrix}1&&&\\&&1&\\&&&1\\&1&1&-1\end{pmatrix}\Leftarrow R=\begin{pmatrix}1&&&\\2&5/2&1&\\&1/2&&1\\-2&1/2&-1&-2\end{pmatrix}$ .

**5**

$A$ similar to  $B\Rightarrow$ $\lambda 1-A$ equiv to $\lambda 1-B$ $\Rightarrow$
$\lambda 1-A$ and $\lambda 1-B$ have same invariant factors  
$\Rightarrow$ $A,B$ have same rational forms $\Rightarrow$ $A,B$ similar

proof2:  
Suppose $P(\lambda)(\lambda 1-A)=(\lambda 1-B)Q(\lambda)$ , where $P(\lambda),Q(\lambda)$ are invertible.  
Let $P(\lambda)=(\lambda 1-B)\bar P(\lambda)+P$ , $Q(\lambda)=\bar Q(\lambda)(\lambda 1-A)+Q$ ,  
then $(\lambda 1-B)(\bar P(\lambda)-\bar Q(\lambda))(\lambda 1-A)=(\lambda 1-B)Q-P(\lambda 1-A)$ .  
thus $P(\lambda 1-A)=(\lambda 1-B)Q$ , and $PA=BP$ .  
Suppose $P(\lambda)M(\lambda)=1$ , $M(\lambda)=(\lambda 1-A)\bar M(\lambda)+M$ ,  
then $(\lambda 1-B)(Q(\lambda)\bar M(\lambda)+\bar P(\lambda)M)+PM=1$ ,  
so $PM=1$ , $P$ invertible, and $A=P^{-1}BP$ .

**6**

$\lambda 1-A^t=(\lambda 1-A)^t$ ,  
by 3.7 ex9, $\lambda 1-A$ and $\lambda 1-A^t$ are equivalent,  
by ex5, $A$ and $A^t$ are similar.

proof2:  
extend to algebraic closure $K$ ,  
each Jordan block is similar to its traspose, so $A$ is to $A^t$ .  
similar over $K\leadsto$ similar over $F$ .   

**7**

cyclic iff it has only 1 invariant factor, iff $f(\lambda)=m(\lambda)$ .

**8**

$m(\lambda)=\lambda^k$ , so $f(\lambda)=\lambda^n$ .  
Take Jordan form.

**9**

Over a general field,  
Diagonalizable $\Leftrightarrow$ has Jordan form and it's diagonal  
$\Leftrightarrow$ all elementary factors are linear $\Leftrightarrow$ $m(\lambda)$ is a product of distinct linear factors.

**10**

$m(\lambda)\mid \lambda(\lambda-1)$ .  
By ex9, it's diagonalizable ; with diags $\in\{0,1\}$ .

**11**

$n-\text{rank}(a1-A)$ is the number of Jordan blocks belonging to $a$ ,  
$\text{rank}(a1-A)^k-\text{rank}(a1-A)^{k+1}$ is that of blocks of size $>k$ .

**12**

The first is in rational form, with invariant factor $\lambda^p-1$ ,  
$=(\lambda-1)^p$ , so has Jordan form equal to the second.

**13**

Let $p(\lambda)=\lambda^m-a_1\lambda^{m-1}+\cdots+(-1)^{m}a_m$ , $a_m\ne 0$ ,  
denote the base $\{v_1,\cdots,v_{em}\}$ .  
Note $p(\lambda)v_{km+2}=a_mv_{km+2m}$ , $\lambda^{m-2}v_{km+2}=v_{km+m}$ ;  
since char $f(\lambda)=p(\lambda)^e$ , ann of any vector is of form $p(\lambda)^l$ ,  
so $\text{ann }v_2\subsetneq \text{ann }v_{m+m}=\text{ann }v_{m+2}\subsetneq \cdots\subsetneq \text{ann }v_{(e-1)m+2}\subsetneq F[\lambda]$ ,  
so $\text{ann }v_{2}=p(\lambda)^e$ , $m(x)=p(\lambda)^e$ .

**Remark:**  
Should the condition be $N=e_{m1}$ , it's easier to get $\text{ann }v_1=p(\lambda)^e$ ;  
in this case don't need $p(\lambda)$ be irreducible.
>$p(\lambda)v_{km+1}=v_{(k+1)m+1}$ , $p(\lambda)v_{(e-1)m+1}=0$ .  
>Let $g(\lambda)=g_{e-1}(\lambda)p(\lambda)^{e-1}+\cdots+g_0(\lambda)$ , where $\text{deg}g_i<e$ ,  
>if $g(\lambda)v_1=0$ , then $g_{e-1}(\lambda)v_{(e-1)m+1}+\cdots+g_0(\lambda)v_1=0$ ,  
>then all $g_i(\lambda)=0$ . Thus $\text{deg}\text{ ann }v_1\ge em$ .

**14**

Prove $(\lambda^2-a\lambda+b)^k$ has the RHS matrix.  
Let two roots be $x_1,x_2$ .

Over $\mathbb{C}$ it has form $\begin{pmatrix}A_1\\&A_2\end{pmatrix}$ , where $A_i=\begin{pmatrix}x_i&1\\&x_i&\ddots\\&&\ddots&1\\&&&x_i\end{pmatrix}$ .

Reorder the base, get $\begin{pmatrix}B&I\\&B&\ddots\\&&\ddots&I\\&&&B\end{pmatrix}$ , where $B=\begin{pmatrix}x_1\\&x_2\end{pmatrix}$ , $I=\begin{pmatrix}1\\&1\end{pmatrix}$ .

There's $Q\in M_2(\mathbb{C})$ , $QBQ^{-1}=\begin{pmatrix}&1\\ a&-b\end{pmatrix}$ ,  
so $\begin{pmatrix}Q\\&\ddots\\&&Q\end{pmatrix}$ transforms the target to the RHS matrix.

Similar over $\mathbb{C}$ means similar over $\mathbb{R}$ .

proof2:  
verify the RHS matrix has $f(\lambda)=m(\lambda)=(\lambda^2-a\lambda+b)^k$ .

**15**

$(\lambda 1-A)e=0$  
$\leadsto f(\lambda)e=\text{det}(\lambda 1-A)1e= \text{adj}(\lambda 1-A)(\lambda 1-a)e=0$  
$\leadsto f(\eta)=0$

proof2:  
$\text{det}(\lambda 1-A)\cdot 1=(\lambda 1-A)\text{adj}(\lambda 1-A)$
????????
????????????ssss



s






















