close all;
clear all;
clc;



zraw=[  0.8 ; 0.85 ; 0.95 ; 0.99 ; 0.87 ; 0.67 ];
zraw=[  0.8 ; 0.85 ; 0.7 ; 0.99 ; 0.87 ; 0.67 ];
%zraw=[  0.62 ; 0.63 ; 0.65 ; 0.9 ; 0.61 ; 0.69 ];


% Reverse scores to get highest values for less known questions
z=1-(zraw-min(zraw));





% Set and scale beta
beta = 10;
beta = 2.2*beta;


Sigma = sum(exp(beta*z))
for i=1:size(z)
    sigma(i) = exp(beta*z(i))/Sigma;
end;


% z2=1-z;
% Somme= sum(z2.^beta);
% for i=1:size(z)
%     sigma(i) = (z2(i)^beta)/Somme;
% end


sigma = sigma'


f = figure();
f.Position = [100 500 1600 400];
subplot (1,2,1);
x=[1:size(z)]';

nil = zeros(size(x));
bar(x, [zraw nil], 'grouped')
ylabel('Data');
yyaxis right


bar(x, [nil sigma], 'grouped')
ylabel('Proba');

subplot (1,2,2);
pie (sigma)
title('Probabilities for each question');

sum (sigma)