uses GraphABC;

function calcD3(x: real): real;
begin
  var a: real;
  for var n:=1 to Floor(x) do
  begin
    a += ((power(-1,n+1)) / (power(2,n)));
  end;
  Result := a;
end;

begin
  Brush.Color := ARGB(0,0,0,0);
  Draw(x->calcD3(x), 1, 16);
end.
