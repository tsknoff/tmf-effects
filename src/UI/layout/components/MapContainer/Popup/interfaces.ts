export interface IMapPopupProps {
  open: boolean;
  feature: IRoadFeature;
  onClose: any;
}
export interface IRoadFeature {
  id: number;
  properties: IRoadFeatureProps;
}
export interface IRoadFeatureProps {
  name?: string; // "н/д"
  type?: string; // "зарубежные"
  country?: string; // "Тайланд"
  lanes?: number; // 4
  payment?: number; // 0
  route?: string; // "н/д"
  speed?: number; // 90 DYNAMIC
  status?: number; // "функционирует"
  index?: number; // 1
  basic?: number; // "0"
  dim_limits?: string; // "н/д"
  unmanned?: number; // 0
  inter_corr?: string; // "0"
  Shape_Leng?: number; // 1.0893568495299999
  date_start?: number;
  date_end?: number;
  constract_price?: number;
  planed_intensity?: number;
}
