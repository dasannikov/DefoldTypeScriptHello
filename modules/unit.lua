local exports = exports or {}
local Unit = Unit or {}
Unit.__index = Unit
function Unit.new(construct, ...)
    local self = setmetatable({}, Unit)
    if construct and Unit.constructor then Unit.constructor(self, ...) end
    return self
end
Unit.randRadius = 100
function Unit.constructor(self)
end
function Unit.testStatic(self,a)
    print("Hello static. a = " .. a);
end
function Unit.init(self)
    local startPos = vmath.vector3();
    startPos.x = math.random(-Unit.randRadius+300,Unit.randRadius+300);
    startPos.y = math.random(-Unit.randRadius+200,Unit.randRadius+200);
    startPos.z = 0;
    self.id = factory.create("/main#factory");
    go.set_position(startPos,self.id);
    go.animate(self.id,"position.x",go.PLAYBACK_LOOP_FORWARD,100,go.EASING_LINEAR,1);
end
exports.Unit = Unit
return exports
