function parseUserkv(n){var c={},i=n.split(";");if(0!==i.length)return i.forEach(function(n){var i=n.split("|");2===i.length&&(c[i[0]]=i[1])}),c}function getDfpTargetingStr(n){var c="";return n.sex&&(c+="cnsex="+n.sex+";"),n.cs&&(c+="cncs="+n.cs+";"),n.csp&&(c+="cncsp="+n.csp+";"),n.hi&&(c+="cnhi="+n.hi+";"),n.in&&(c+="cnin="+n.in+";"),n.wf&&(c+="cnwf="+n.wf+";"),c}